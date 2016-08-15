import test from 'tape-catch'; // eslint-disable-line

export default (msg, cb) => {
  test(msg, (t) => {
    cb(t);
    t.end();
  });
};
