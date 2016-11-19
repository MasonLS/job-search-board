

import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import jsdom from 'jsdom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Popup from '../app/components/popup/popup';
import rootReducer from '../app/reducers/root';
import PopupContainer from '../app/containers/popup';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

// set globals for mocha that make access to document and window feel
// natural in the test environment
global.document = doc;
global.window = win;


const testStore = createStore(rootReducer);
const connectedPopup = (
  <Provider store={testStore}>
    <PopupContainer />
  </Provider>
);


describe('Popup component', () => {

  describe('New job form', () => {

    let PopupWrapper;

    beforeEach('shallow render Popup', () => {
      PopupWrapper = shallow(<Popup  url={''} addJob={new Function}/>);
    });

    describe('Input fields', () => {

      describe('Company', () => {

        it('renders a text input', () => {
          const inputWrapper = PopupWrapper.find('#company');

          expect(inputWrapper.type()).to.equal('input');
          expect(inputWrapper.is({type: 'text'})).to.be.true;
          expect(inputWrapper.prop('value')).to.equal('');
        });

        it('updates state correctly on change', () => {
          const mockChangeEvent = {
            target: {
              value: 'Walmart'
            }
          };

          PopupWrapper.find('#company').simulate('change', mockChangeEvent);
          expect(PopupWrapper.state('newJob').company).to.equal('Walmart');
        });

      });

      describe('Position', () => {

        it('renders a blank text input', () => {
          const inputWrapper = PopupWrapper.find('#position');

          expect(inputWrapper.type()).to.equal('input');
          expect(inputWrapper.is({type: 'text'})).to.be.true;
          expect(inputWrapper.prop('value')).to.equal('');
        });

        it('updates state correctly on change', () => {
          const mockChangeEvent = {
            target: {
              value: 'King'
            }
          };

          PopupWrapper.find('#position').simulate('change', mockChangeEvent);
          expect(PopupWrapper.state('newJob').position).to.equal('King');
        });

      });

      describe('Notes', () => {

        it('renders a blank textarea', () => {
          const textareaWrapper = PopupWrapper.find('#notes');

          expect(textareaWrapper.type()).to.equal('textarea');
          expect(textareaWrapper.prop('value')).to.equal('');
        });

        it('updates state correctly on change', () => {
          const mockChangeEvent = {
            target: {
              value: 'Sounds stressful'
            }
          };

          PopupWrapper.find('#notes').simulate('change', mockChangeEvent);
          expect(PopupWrapper.state('newJob').notes).to.equal('Sounds stressful');
        });

      });

      describe('Interest', () => {

        it('renders a select menu with default value of 1', () => {
          const selectWrapper = PopupWrapper.find('#interest');

          expect(selectWrapper.type()).to.equal('select');
          expect(selectWrapper.prop('value')).to.equal('1');
        });

        it('updates state correctly on change', () => {
          const mockChangeEvent = {
            target: {
              value: '10'
            }
          };

          PopupWrapper.find('#interest').simulate('change', mockChangeEvent);
          expect(PopupWrapper.state('newJob').interest).to.equal('10');
        });

      });

    });

    describe('handleSubmit method', () => {

      it('resets state.newJob values to defaults', (done) => {
        const newJob = {
          company: 'Walmart',
          position: 'King',
          notes: 'Sounds stressful',
          interest: '10'
        }

        PopupWrapper.setState({ newJob: newJob }, () => {
          PopupWrapper.find('#submit').simulate('click');

          setTimeout(() => {
            expect(PopupWrapper.state('newJob').company).to.equal('');
            expect(PopupWrapper.state('newJob').position).to.equal('');
            expect(PopupWrapper.state('newJob').notes).to.equal('');
            expect(PopupWrapper.state('newJob').interest).to.equal('1');
            done();
          }, 0);
        });
      });

    });


  });

});
