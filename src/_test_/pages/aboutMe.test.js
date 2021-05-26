import React from 'react'
import { mount } from 'enzyme'
import AboutMe from '../../pages/aboutMe'

describe('<AboutMe /> render', () => {
    test('render component AboutMe', () => {
        const aboutMe = mount(AboutMe);
        expect(aboutMe.length).toEqual(1);
    })
})