import React from 'react'
import { mount } from 'enzyme'
import AboutMe from './index'

describe('<AboutMe /> render', () => {
    const aboutMe = mount(AboutMe);
    test('render component AboutMe', () => {
        expect(aboutMe.length).toEqual(1);
    })

    // test('find first section', () => {
    //    expect(aboutMe)
    // })
})