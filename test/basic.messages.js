/* Copyright © 2022 Seneca Project Contributors, MIT License. */

const Pkg = require('../package.json')

module.exports = {
  print: false,
  pattern: 'sys:provider,provider:typeform',
  allow: { missing: true },

  calls: [
    {
      pattern: 'get:info',
      out: {
        ok: true,
        name: 'typeform',
        version: Pkg.version,
      },
    },
  ],
}
