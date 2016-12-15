'use strict';

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_CHIANGMAIMOVIES_TOKEN;
if (!WIT_TOKEN) {
  throw new Error('missing WIT_TOKEN');
}

// Messenger API parameters
const FB_PAGE_TOKEN = process.env.CHIANGMAIMOVIES_BOT_PAGE_TOKEN;

var FB_VERIFY_TOKEN = process.env.CHIANGMAIMOVIES_BOT_VERIFY_TOKEN;
if (!FB_VERIFY_TOKEN) {
  FB_VERIFY_TOKEN = "just_do_it";
}

module.exports = {
  WIT_TOKEN: WIT_TOKEN,
  FB_PAGE_TOKEN: FB_PAGE_TOKEN,
  FB_VERIFY_TOKEN: FB_VERIFY_TOKEN,
};
