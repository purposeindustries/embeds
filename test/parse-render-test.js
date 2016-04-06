import test from 'ava';
import 'babel-core/register';
import fixtures from './fixtures';
import {render, parse} from '../lib';
import {string} from 'deku';
import queryDom from 'query-dom';

const parseAndRender = input =>
  string.render(render(parse(queryDom(input))));

test('parse() + render() facebook - post', t => {
  const input = fixtures.facebookPost;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});

test('parse() + render() facebook - video', t => {
  const input = fixtures.facebookVideo;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});

test('parse() + render() instagram - with caption', t => {
  const input = fixtures.instagramCaption;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});

test('parse() + render() instagram - without caption', t => {
  const input = fixtures.instagramWithoutCaption;
  const expected = input;
  const actual = parseAndRender(input);
  t.is(actual, expected);
});