'use strict';
(this.webpackJsonpweread_helper_notehub = this.webpackJsonpweread_helper_notehub || []).push([[0], {
  105 : function(blob, options, seriesStackIndexCallback) {
    seriesStackIndexCallback(18);
    /** @type {number} */
    blob.exports.EDAM_ATTRIBUTE_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_ATTRIBUTE_LEN_MAX = 4096;
    /** @type {string} */
    blob.exports.EDAM_ATTRIBUTE_REGEX = "^[^\\p{Cc}\\p{Zl}\\p{Zp}]{1,4096}$";
    /** @type {number} */
    blob.exports.EDAM_ATTRIBUTE_LIST_MAX = 100;
    /** @type {number} */
    blob.exports.EDAM_ATTRIBUTE_MAP_MAX = 100;
    /** @type {number} */
    blob.exports.EDAM_GUID_LEN_MIN = 36;
    /** @type {number} */
    blob.exports.EDAM_GUID_LEN_MAX = 36;
    /** @type {string} */
    blob.exports.EDAM_GUID_REGEX = "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$";
    /** @type {number} */
    blob.exports.EDAM_EMAIL_LEN_MIN = 6;
    /** @type {number} */
    blob.exports.EDAM_EMAIL_LEN_MAX = 255;
    /** @type {string} */
    blob.exports.EDAM_EMAIL_LOCAL_REGEX = "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$";
    /** @type {string} */
    blob.exports.EDAM_EMAIL_DOMAIN_REGEX = "^[A-Za-z0-9-]*[A-Za-z0-9](\\.[A-Za-z0-9-]*[A-Za-z0-9])*\\.([A-Za-z]{2,})$";
    /** @type {string} */
    blob.exports.EDAM_EMAIL_REGEX = "^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[A-Za-z0-9-]*[A-Za-z0-9](\\.[A-Za-z0-9-]*[A-Za-z0-9])*\\.([A-Za-z]{2,})$";
    /** @type {string} */
    blob.exports.EDAM_VAT_REGEX = "^(AT)?U[0-9]{8}$|^(BE)?0?[0-9]{9}$|^(BG)?[0-9]{9,10}$|^(CY)?[0-9]{8}L$|^(CZ)?[0-9]{8,10}$|^(DE)?[0-9]{9}$|^(DK)?[0-9]{8}$|^(EE)?[0-9]{9}$|^(EL|GR)?[0-9]{9}$|^(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]$|^(FI)?[0-9]{8}$|^(FR)?[0-9A-Z]{2}[0-9]{9}$|^(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})$|^(HU)?[0-9]{8}$|^(IE)?[0-9]S[0-9]{5}L$|^(IT)?[0-9]{11}$|^(LT)?([0-9]{9}|[0-9]{12})$|^(LU)?[0-9]{8}$|^(LV)?[0-9]{11}$|^(MT)?[0-9]{8}$|^(NL)?[0-9]{9}B[0-9]{2}$|^(PL)?[0-9]{10}$|^(PT)?[0-9]{9}$|^(RO)?[0-9]{2,10}$|^(SE)?[0-9]{12}$|^(SI)?[0-9]{8}$|^(SK)?[0-9]{10}$|^[0-9]{9}MVA$|^[0-9]{6}$|^CHE[0-9]{9}(TVA|MWST|IVA)$";
    /** @type {number} */
    blob.exports.EDAM_TIMEZONE_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_TIMEZONE_LEN_MAX = 32;
    /** @type {string} */
    blob.exports.EDAM_TIMEZONE_REGEX = "^([A-Za-z_-]+(/[A-Za-z_-]+)*)|(GMT(-|\\+)[0-9]{1,2}(:[0-9]{2})?)$";
    /** @type {number} */
    blob.exports.EDAM_MIME_LEN_MIN = 3;
    /** @type {number} */
    blob.exports.EDAM_MIME_LEN_MAX = 255;
    /** @type {string} */
    blob.exports.EDAM_MIME_REGEX = "^[A-Za-z]+/[A-Za-z0-9._+-]+$";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_GIF = "image/gif";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_JPEG = "image/jpeg";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_PNG = "image/png";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_TIFF = "image/tiff";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_WAV = "audio/wav";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_MP3 = "audio/mpeg";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_AMR = "audio/amr";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_AAC = "audio/aac";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_M4A = "audio/mp4";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_MP4_VIDEO = "video/mp4";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_INK = "application/vnd.evernote.ink";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_PDF = "application/pdf";
    /** @type {string} */
    blob.exports.EDAM_MIME_TYPE_DEFAULT = "application/octet-stream";
    /** @type {!Array} */
    blob.exports.EDAM_MIME_TYPES = ["image/gif", "image/jpeg", "image/png", "audio/wav", "audio/mpeg", "audio/amr", "application/vnd.evernote.ink", "application/pdf", "video/mp4", "audio/aac", "audio/mp4"];
    /** @type {!Array} */
    blob.exports.EDAM_INDEXABLE_RESOURCE_MIME_TYPES = ["application/msword", "application/mspowerpoint", "application/excel", "application/vnd.ms-word", "application/vnd.ms-powerpoint", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.apple.pages", "application/vnd.apple.numbers", "application/vnd.apple.keynote", 
    "application/x-iwork-pages-sffpages", "application/x-iwork-numbers-sffnumbers", "application/x-iwork-keynote-sffkey"];
    /** @type {!Array} */
    blob.exports.EDAM_INDEXABLE_PLAINTEXT_MIME_TYPES = ["application/x-sh", "application/x-bsh", "application/sql", "application/x-sql"];
    /** @type {number} */
    blob.exports.EDAM_SEARCH_QUERY_LEN_MIN = 0;
    /** @type {number} */
    blob.exports.EDAM_SEARCH_QUERY_LEN_MAX = 1024;
    /** @type {string} */
    blob.exports.EDAM_SEARCH_QUERY_REGEX = "^[^\\p{Cc}\\p{Zl}\\p{Zp}]{0,1024}$";
    /** @type {number} */
    blob.exports.EDAM_HASH_LEN = 16;
    /** @type {number} */
    blob.exports.EDAM_USER_USERNAME_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_USER_USERNAME_LEN_MAX = 64;
    /** @type {string} */
    blob.exports.EDAM_USER_USERNAME_REGEX = "^[a-z0-9]([a-z0-9_-]{0,62}[a-z0-9])?$";
    /** @type {number} */
    blob.exports.EDAM_USER_NAME_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_USER_NAME_LEN_MAX = 255;
    /** @type {string} */
    blob.exports.EDAM_USER_NAME_REGEX = "^[^\\p{Cc}\\p{Zl}\\p{Zp}]{1,255}$";
    /** @type {number} */
    blob.exports.EDAM_TAG_NAME_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_TAG_NAME_LEN_MAX = 100;
    /** @type {string} */
    blob.exports.EDAM_TAG_NAME_REGEX = "^[^,\\p{Cc}\\p{Z}]([^,\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^,\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_NOTE_TITLE_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_NOTE_TITLE_LEN_MAX = 255;
    /** @type {string} */
    blob.exports.EDAM_NOTE_TITLE_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,253}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_NOTE_CONTENT_LEN_MIN = 0;
    /** @type {number} */
    blob.exports.EDAM_NOTE_CONTENT_LEN_MAX = 5242880;
    /** @type {number} */
    blob.exports.EDAM_APPLICATIONDATA_NAME_LEN_MIN = 3;
    /** @type {number} */
    blob.exports.EDAM_APPLICATIONDATA_NAME_LEN_MAX = 32;
    /** @type {number} */
    blob.exports.EDAM_APPLICATIONDATA_VALUE_LEN_MIN = 0;
    /** @type {number} */
    blob.exports.EDAM_APPLICATIONDATA_VALUE_LEN_MAX = 4092;
    /** @type {number} */
    blob.exports.EDAM_APPLICATIONDATA_ENTRY_LEN_MAX = 4095;
    /** @type {string} */
    blob.exports.EDAM_APPLICATIONDATA_NAME_REGEX = "^[A-Za-z0-9_.-]{3,32}$";
    /** @type {string} */
    blob.exports.EDAM_APPLICATIONDATA_VALUE_REGEX = "^[\\p{Space}[^\\p{Cc}]]{0,4092}$";
    /** @type {number} */
    blob.exports.EDAM_NOTEBOOK_NAME_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_NOTEBOOK_NAME_LEN_MAX = 100;
    /** @type {string} */
    blob.exports.EDAM_NOTEBOOK_NAME_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_NOTEBOOK_STACK_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_NOTEBOOK_STACK_LEN_MAX = 100;
    /** @type {string} */
    blob.exports.EDAM_NOTEBOOK_STACK_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_PUBLISHING_URI_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_PUBLISHING_URI_LEN_MAX = 255;
    /** @type {string} */
    blob.exports.EDAM_PUBLISHING_URI_REGEX = "^[a-zA-Z0-9.~_+-]{1,255}$";
    /** @type {!Array} */
    blob.exports.EDAM_PUBLISHING_URI_PROHIBITED = [".", ".."];
    /** @type {number} */
    blob.exports.EDAM_PUBLISHING_DESCRIPTION_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_PUBLISHING_DESCRIPTION_LEN_MAX = 200;
    /** @type {string} */
    blob.exports.EDAM_PUBLISHING_DESCRIPTION_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,198}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_SAVED_SEARCH_NAME_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_SAVED_SEARCH_NAME_LEN_MAX = 100;
    /** @type {string} */
    blob.exports.EDAM_SAVED_SEARCH_NAME_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,98}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_USER_PASSWORD_LEN_MIN = 6;
    /** @type {number} */
    blob.exports.EDAM_USER_PASSWORD_LEN_MAX = 64;
    /** @type {string} */
    blob.exports.EDAM_USER_PASSWORD_REGEX = "^[A-Za-z0-9!#$%&'()*+,./:;<=>?@^_`{|}~\\[\\]\\\\-]{6,64}$";
    /** @type {number} */
    blob.exports.EDAM_BUSINESS_URI_LEN_MAX = 32;
    /** @type {string} */
    blob.exports.EDAM_BUSINESS_MARKETING_CODE_REGEX_PATTERN = "[A-Za-z0-9-]{1,128}";
    /** @type {number} */
    blob.exports.EDAM_NOTE_TAGS_MAX = 100;
    /** @type {number} */
    blob.exports.EDAM_NOTE_RESOURCES_MAX = 1E3;
    /** @type {number} */
    blob.exports.EDAM_USER_TAGS_MAX = 1E5;
    /** @type {number} */
    blob.exports.EDAM_BUSINESS_TAGS_MAX = 1E5;
    /** @type {number} */
    blob.exports.EDAM_USER_SAVED_SEARCHES_MAX = 100;
    /** @type {number} */
    blob.exports.EDAM_USER_NOTES_MAX = 1E5;
    /** @type {number} */
    blob.exports.EDAM_BUSINESS_NOTES_MAX = 5E5;
    /** @type {number} */
    blob.exports.EDAM_USER_NOTEBOOKS_MAX = 250;
    /** @type {number} */
    blob.exports.EDAM_BUSINESS_NOTEBOOKS_MAX = 1E4;
    /** @type {number} */
    blob.exports.EDAM_USER_RECENT_MAILED_ADDRESSES_MAX = 10;
    /** @type {number} */
    blob.exports.EDAM_USER_MAIL_LIMIT_DAILY_FREE = 50;
    /** @type {number} */
    blob.exports.EDAM_USER_MAIL_LIMIT_DAILY_PREMIUM = 200;
    /** @type {number} */
    blob.exports.EDAM_USER_UPLOAD_LIMIT_FREE = 62914560;
    /** @type {number} */
    blob.exports.EDAM_USER_UPLOAD_LIMIT_PREMIUM = 10737418240;
    /** @type {number} */
    blob.exports.EDAM_USER_UPLOAD_LIMIT_PLUS = 1073741824;
    /** @type {number} */
    blob.exports.EDAM_USER_UPLOAD_SURVEY_THRESHOLD = 5368709120;
    /** @type {number} */
    blob.exports.EDAM_USER_UPLOAD_LIMIT_BUSINESS = 10737418240;
    /** @type {number} */
    blob.exports.EDAM_USER_UPLOAD_LIMIT_BUSINESS_PER_USER = 2147483647;
    /** @type {number} */
    blob.exports.EDAM_NOTE_SIZE_MAX_FREE = 26214400;
    /** @type {number} */
    blob.exports.EDAM_NOTE_SIZE_MAX_PREMIUM = 209715200;
    /** @type {number} */
    blob.exports.EDAM_RESOURCE_SIZE_MAX_FREE = 26214400;
    /** @type {number} */
    blob.exports.EDAM_RESOURCE_SIZE_MAX_PREMIUM = 209715200;
    /** @type {number} */
    blob.exports.EDAM_USER_LINKED_NOTEBOOK_MAX = 100;
    /** @type {number} */
    blob.exports.EDAM_USER_LINKED_NOTEBOOK_MAX_PREMIUM = 500;
    /** @type {number} */
    blob.exports.EDAM_NOTEBOOK_BUSINESS_SHARED_NOTEBOOK_MAX = 5E3;
    /** @type {number} */
    blob.exports.EDAM_NOTEBOOK_PERSONAL_SHARED_NOTEBOOK_MAX = 500;
    /** @type {number} */
    blob.exports.EDAM_NOTE_BUSINESS_SHARED_NOTE_MAX = 1E3;
    /** @type {number} */
    blob.exports.EDAM_NOTE_PERSONAL_SHARED_NOTE_MAX = 100;
    /** @type {number} */
    blob.exports.EDAM_NOTE_CONTENT_CLASS_LEN_MIN = 3;
    /** @type {number} */
    blob.exports.EDAM_NOTE_CONTENT_CLASS_LEN_MAX = 32;
    /** @type {string} */
    blob.exports.EDAM_NOTE_CONTENT_CLASS_REGEX = "^[A-Za-z0-9_.-]{3,32}$";
    /** @type {string} */
    blob.exports.EDAM_HELLO_APP_CONTENT_CLASS_PREFIX = "evernote.hello.";
    /** @type {string} */
    blob.exports.EDAM_FOOD_APP_CONTENT_CLASS_PREFIX = "evernote.food.";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_HELLO_ENCOUNTER = "evernote.hello.encounter";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_HELLO_PROFILE = "evernote.hello.profile";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_FOOD_MEAL = "evernote.food.meal";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_SKITCH_PREFIX = "evernote.skitch";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_SKITCH = "evernote.skitch";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_SKITCH_PDF = "evernote.skitch.pdf";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_PENULTIMATE_PREFIX = "evernote.penultimate.";
    /** @type {string} */
    blob.exports.EDAM_CONTENT_CLASS_PENULTIMATE_NOTEBOOK = "evernote.penultimate.notebook";
    /** @type {string} */
    blob.exports.EDAM_SOURCE_APPLICATION_POSTIT = "postit";
    /** @type {string} */
    blob.exports.EDAM_SOURCE_APPLICATION_MOLESKINE = "moleskine";
    /** @type {string} */
    blob.exports.EDAM_SOURCE_APPLICATION_EN_SCANSNAP = "scanner.scansnap.evernote";
    /** @type {string} */
    blob.exports.EDAM_SOURCE_APPLICATION_EWC = "clipncite.web";
    /** @type {string} */
    blob.exports.EDAM_SOURCE_OUTLOOK_CLIPPER = "app.ms.outlook";
    /** @type {number} */
    blob.exports.EDAM_NOTE_TITLE_QUALITY_UNTITLED = 0;
    /** @type {number} */
    blob.exports.EDAM_NOTE_TITLE_QUALITY_LOW = 1;
    /** @type {number} */
    blob.exports.EDAM_NOTE_TITLE_QUALITY_MEDIUM = 2;
    /** @type {number} */
    blob.exports.EDAM_NOTE_TITLE_QUALITY_HIGH = 3;
    /** @type {number} */
    blob.exports.EDAM_RELATED_PLAINTEXT_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_RELATED_PLAINTEXT_LEN_MAX = 131072;
    /** @type {number} */
    blob.exports.EDAM_RELATED_MAX_NOTES = 25;
    /** @type {number} */
    blob.exports.EDAM_RELATED_MAX_NOTEBOOKS = 1;
    /** @type {number} */
    blob.exports.EDAM_RELATED_MAX_TAGS = 25;
    /** @type {number} */
    blob.exports.EDAM_RELATED_MAX_EXPERTS = 10;
    /** @type {number} */
    blob.exports.EDAM_RELATED_MAX_RELATED_CONTENT = 10;
    /** @type {number} */
    blob.exports.EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_LEN_MAX = 200;
    /** @type {string} */
    blob.exports.EDAM_BUSINESS_NOTEBOOK_DESCRIPTION_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,198}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_BUSINESS_PHONE_NUMBER_LEN_MAX = 20;
    /** @type {number} */
    blob.exports.EDAM_PREFERENCE_NAME_LEN_MIN = 3;
    /** @type {number} */
    blob.exports.EDAM_PREFERENCE_NAME_LEN_MAX = 32;
    /** @type {number} */
    blob.exports.EDAM_PREFERENCE_VALUE_LEN_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_PREFERENCE_VALUE_LEN_MAX = 1024;
    /** @type {number} */
    blob.exports.EDAM_MAX_PREFERENCES = 100;
    /** @type {number} */
    blob.exports.EDAM_MAX_VALUES_PER_PREFERENCE = 256;
    /** @type {number} */
    blob.exports.EDAM_PREFERENCE_ONLY_ONE_VALUE_LEN_MAX = 16384;
    /** @type {string} */
    blob.exports.EDAM_PREFERENCE_NAME_REGEX = "^[A-Za-z0-9_.-]{3,32}$";
    /** @type {string} */
    blob.exports.EDAM_PREFERENCE_VALUE_REGEX = "^[^\\p{Cc}]{1,1024}$";
    /** @type {string} */
    blob.exports.EDAM_PREFERENCE_ONLY_ONE_VALUE_REGEX = "^[^\\p{Cc}]{1,16384}$";
    /** @type {string} */
    blob.exports.EDAM_PREFERENCE_SHORTCUTS = "evernote.shortcuts";
    /** @type {string} */
    blob.exports.EDAM_PREFERENCE_BUSINESS_DEFAULT_NOTEBOOK = "evernote.business.notebook";
    /** @type {string} */
    blob.exports.EDAM_PREFERENCE_BUSINESS_QUICKNOTE = "evernote.business.quicknote";
    /** @type {number} */
    blob.exports.EDAM_PREFERENCE_SHORTCUTS_MAX_VALUES = 250;
    /** @type {number} */
    blob.exports.EDAM_DEVICE_ID_LEN_MAX = 32;
    /** @type {string} */
    blob.exports.EDAM_DEVICE_ID_REGEX = "^[^\\p{Cc}]{1,32}$";
    /** @type {number} */
    blob.exports.EDAM_DEVICE_DESCRIPTION_LEN_MAX = 64;
    /** @type {string} */
    blob.exports.EDAM_DEVICE_DESCRIPTION_REGEX = "^[^\\p{Cc}]{1,64}$";
    /** @type {number} */
    blob.exports.EDAM_SEARCH_SUGGESTIONS_MAX = 10;
    /** @type {number} */
    blob.exports.EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MAX = 1024;
    /** @type {number} */
    blob.exports.EDAM_SEARCH_SUGGESTIONS_PREFIX_LEN_MIN = 2;
    /** @type {number} */
    blob.exports.EDAM_FIND_CONTACT_DEFAULT_MAX_RESULTS = 100;
    /** @type {number} */
    blob.exports.EDAM_FIND_CONTACT_MAX_RESULTS = 256;
    /** @type {number} */
    blob.exports.EDAM_NOTE_LOCK_VIEWERS_NOTES_MAX = 150;
    /** @type {number} */
    blob.exports.EDAM_GET_ORDERS_MAX_RESULTS = 2E3;
    /** @type {number} */
    blob.exports.EDAM_MESSAGE_BODY_LEN_MAX = 2048;
    /** @type {string} */
    blob.exports.EDAM_MESSAGE_BODY_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,2046}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_MESSAGE_RECIPIENTS_MAX = 50;
    /** @type {number} */
    blob.exports.EDAM_MESSAGE_ATTACHMENTS_MAX = 100;
    /** @type {number} */
    blob.exports.EDAM_MESSAGE_ATTACHMENT_TITLE_LEN_MAX = 255;
    /** @type {string} */
    blob.exports.EDAM_MESSAGE_ATTACHMENT_TITLE_REGEX = "^[^\\p{Cc}\\p{Z}]([^\\p{Cc}\\p{Zl}\\p{Zp}]{0,253}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_MESSAGE_ATTACHMENT_SNIPPET_LEN_MAX = 2048;
    /** @type {string} */
    blob.exports.EDAM_MESSAGE_ATTACHMENT_SNIPPET_REGEX = "^[^\\p{Cc}\\p{Z}]([\\n[^\\p{Cc}\\p{Zl}\\p{Zp}]]{0,2046}[^\\p{Cc}\\p{Z}])?$";
    /** @type {number} */
    blob.exports.EDAM_USER_PROFILE_PHOTO_MAX_BYTES = 716800;
    /** @type {number} */
    blob.exports.EDAM_PROMOTION_ID_LEN_MAX = 32;
    /** @type {string} */
    blob.exports.EDAM_PROMOTION_ID_REGEX = "^[A-Za-z0-9_.-]{1,32}$";
    /** @type {number} */
    blob.exports.EDAM_APP_RATING_MIN = 1;
    /** @type {number} */
    blob.exports.EDAM_APP_RATING_MAX = 5;
    /** @type {number} */
    blob.exports.EDAM_SNIPPETS_NOTES_MAX = 24;
    /** @type {number} */
    blob.exports.EDAM_CONNECTED_IDENTITY_REQUEST_MAX = 100;
  },
  106 : function(module, layer, $) {
    var Thrift = $(18);
    var self = $(56);
    module.exports.EDAMErrorCode = {
      UNKNOWN : 1,
      BAD_DATA_FORMAT : 2,
      PERMISSION_DENIED : 3,
      INTERNAL_ERROR : 4,
      DATA_REQUIRED : 5,
      LIMIT_REACHED : 6,
      QUOTA_REACHED : 7,
      INVALID_AUTH : 8,
      AUTH_EXPIRED : 9,
      DATA_CONFLICT : 10,
      ENML_VALIDATION : 11,
      SHARD_UNAVAILABLE : 12,
      LEN_TOO_SHORT : 13,
      LEN_TOO_LONG : 14,
      TOO_FEW : 15,
      TOO_MANY : 16,
      UNSUPPORTED_OPERATION : 17,
      TAKEN_DOWN : 18,
      RATE_LIMIT_REACHED : 19,
      BUSINESS_SECURITY_LOGIN_REQUIRED : 20,
      DEVICE_LIMIT_REACHED : 21
    };
    module.exports.EDAMInvalidContactReason = {
      BAD_ADDRESS : 0,
      DUPLICATE_CONTACT : 1,
      NO_CONNECTION : 2
    };
    module.exports.EDAMUserException = Thrift.Exception.define("EDAMUserException", {
      1 : {
        alias : "errorCode",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "parameter",
        type : Thrift.Type.STRING
      }
    });
    module.exports.EDAMSystemException = Thrift.Exception.define("EDAMSystemException", {
      1 : {
        alias : "errorCode",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "message",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "rateLimitDuration",
        type : Thrift.Type.I32
      }
    });
    module.exports.EDAMNotFoundException = Thrift.Exception.define("EDAMNotFoundException", {
      1 : {
        alias : "identifier",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "key",
        type : Thrift.Type.STRING
      }
    });
    module.exports.EDAMInvalidContactsException = Thrift.Exception.define("EDAMInvalidContactsException", {
      1 : {
        alias : "contacts",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRUCT, self.Contact)
      },
      2 : {
        alias : "parameter",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "reasons",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.I32)
      }
    });
  },
  110 : function(module, object, instantiate) {
    module.exports = instantiate(211);
  },
  115 : function(branchData, beforeZero, afterZero) {
  },
  116 : function(blob, name, universe) {
    /** @type {string} */
    blob.exports = universe.p + "static/media/logo.5d5d9eef.svg";
  },
  117 : function(branchData, beforeZero, afterZero) {
  },
  120 : function(formatters, customFormatters) {
  },
  122 : function(formatters, customFormatters) {
  },
  154 : function(formatters, customFormatters) {
  },
  155 : function(formatters, customFormatters) {
  },
  18 : function(value, global, scopeContext) {
    var exports = {
      Version : "0.9.0",
      Type : {
        STOP : 0,
        VOID : 1,
        BOOL : 2,
        BYTE : 3,
        I08 : 3,
        DOUBLE : 4,
        I16 : 6,
        I32 : 8,
        I64 : 10,
        STRING : 11,
        UTF7 : 11,
        STRUCT : 12,
        EXCEPTION : 12,
        MAP : 13,
        SET : 14,
        LIST : 15,
        UTF8 : 16,
        UTF16 : 17,
        BINARY : 18
      },
      MessageType : {
        CALL : 1,
        REPLY : 2,
        EXCEPTION : 3
      },
      objectLength : function(obj) {
        /** @type {number} */
        var count = 0;
        var i;
        for (i in obj) {
          if (obj.hasOwnProperty(i)) {
            count++;
          }
        }
        return count;
      },
      inherits : function(ctor, superCtor) {
        /**
         * @return {undefined}
         */
        function TempCtor() {
        }
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor;
      },
      equals : function(t1, t2) {
        return t1 == t2 || t1 == exports.Type.BINARY && t2 == exports.Type.STRING || t1 == exports.Type.STRING && t2 == exports.Type.BINARY;
      },
      serializedType : function(t) {
        return t == exports.Type.BINARY ? exports.Type.STRING : t;
      },
      defaults : function(object) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(values) {
          if (values) {
            var i;
            for (i in values) {
              if (void 0 === object[i]) {
                object[i] = values[i];
              }
            }
          }
        }), object;
      },
      extend : function(lib) {
        return Array.prototype.slice.call(arguments, 1).forEach(function(exports) {
          if (exports) {
            var e;
            for (e in exports) {
              lib[e] = exports[e];
            }
          }
        }), lib;
      },
      Method : function(options) {
        this.alias = options.alias;
        this.args = options.args;
        this.result = options.result;
      }
    };
    /**
     * @param {string} name
     * @return {?}
     */
    exports.Method.define = function(name) {
      return new exports.Method(name);
    };
    /**
     * @return {undefined}
     */
    exports.Method.noop = function() {
    };
    /**
     * @param {!Object} output
     * @param {undefined} seqid
     * @param {!Object} structOrErr
     * @param {!Function} structdef
     * @return {undefined}
     */
    exports.Method.sendException = function(output, seqid, structOrErr, structdef) {
      var config;
      if (!structdef) {
        if (structOrErr instanceof exports.TApplicationException) {
          structdef = exports.TApplicationException;
        } else {
          if (structOrErr instanceof exports.TException) {
            structdef = exports.TException;
          } else {
            structdef = exports.TApplicationException;
            config = {};
            if (structOrErr) {
              if (structOrErr.message) {
                /** @type {string} */
                config.message = structOrErr.message + "";
              }
              if (null != structOrErr.code && Number.isFinite(config.code)) {
                config.code = structOrErr.code;
              }
            }
            structOrErr = new exports.TApplicationException(config);
          }
        }
      }
      output.writeMessageBegin("", exports.MessageType.EXCEPTION, seqid);
      structdef.write(output, structOrErr);
      output.writeMessageEnd();
      output.flush();
    };
    /**
     * @param {!Object} output
     * @param {number} seqid
     * @param {!Object} args
     * @param {!Function} callback
     * @return {undefined}
     */
    exports.Method.prototype.sendRequest = function(output, seqid, args, callback) {
      output.writeMessageBegin(this.alias, exports.MessageType.CALL, seqid);
      this.args.write(output, args);
      output.writeMessageEnd();
      output.flush(function(identifierPositions, response) {
        if (identifierPositions) {
          callback(identifierPositions);
        } else {
          this.processResponse(response, callback);
        }
      }.bind(this));
    };
    /**
     * @param {!Object} output
     * @param {undefined} seqid
     * @param {!Object} struct
     * @return {undefined}
     */
    exports.Method.prototype.sendResponse = function(output, seqid, struct) {
      output.writeMessageBegin(this.alias, exports.MessageType.REPLY, seqid);
      this.result.write(output, struct);
      output.writeMessageEnd();
      output.flush();
    };
    /**
     * @param {?} response
     * @param {!Function} callback
     * @return {?}
     */
    exports.Method.prototype.processResponse = function(response, callback) {
      var scope;
      var error;
      var i;
      var ret;
      if (callback = callback || exports.Method.noop, (ret = response.readMessageBegin()).mtype == exports.MessageType.EXCEPTION) {
        return error = exports.TApplicationException.read(response), response.readMessageEnd(), void callback(error);
      }
      if (ret.mtype == exports.MessageType.REPLY) {
        if (this.alias == ret.fname) {
          for (i in scope = this.result.read(response), response.readMessageEnd(), this.result.fields) {
            if (0 != i && scope[this.result.fields[i].alias]) {
              return void callback(error = scope[this.result.fields[i].alias]);
            }
          }
          callback(null, scope.returnValue);
        } else {
          callback(error = Error("Unrecognized method name. Expected [" + me.alias + "] Received [" + ret.fname + "]"));
        }
      } else {
        callback(error = Error("Client expects REPLY but received unsupported message type: " + ret.mtype));
      }
    };
    exports.List = {};
    /**
     * @param {string} name
     * @param {string} type
     * @param {!Object} def
     * @return {?}
     */
    exports.List.define = function(name, type, def) {
      /**
       * @return {?}
       */
      var ThriftSet = function() {
        return [];
      };
      return "string" != typeof name && (def = type, type = name, name = "anonymous"), ThriftSet.alias = name, ThriftSet.type = type, ThriftSet.def = def, ThriftSet.read = exports.List.read.bind(null, ThriftSet), ThriftSet.write = exports.List.write.bind(null, ThriftSet), ThriftSet;
    };
    /**
     * @param {?} callback
     * @param {undefined} input
     * @return {?}
     */
    exports.List.read = function(callback, input) {
      var cb = new callback;
      var header = input.readListBegin();
      return exports.List.readEntries(callback, cb, input, header.size), input.readListEnd(), cb;
    };
    /**
     * @param {!Object} config
     * @param {!Array} args
     * @param {!Float64Array} input
     * @param {number} size
     * @return {undefined}
     */
    exports.List.readEntries = function(config, args, input, size) {
      var s;
      /** @type {number} */
      s = 0;
      for (; s < size; s++) {
        if (null != config.def) {
          args.push(config.def.read(input));
        } else {
          args.push(input.readType(config.type));
        }
      }
    };
    /**
     * @param {!Object} listdef
     * @param {!Object} output
     * @param {!Array} input
     * @return {undefined}
     */
    exports.List.write = function(listdef, output, input) {
      var val;
      var i;
      var size = input.length;
      output.writeListBegin(listdef.type, size);
      /** @type {number} */
      i = 0;
      for (; i < size; i++) {
        val = input[i];
        if (listdef.def) {
          listdef.def.write(output, val);
        } else {
          output.writeType(listdef.type, val);
        }
      }
      output.writeListEnd();
    };
    exports.Set = {};
    /**
     * @param {string} name
     * @param {string} type
     * @param {string} def
     * @return {?}
     */
    exports.Set.define = function(name, type, def) {
      /**
       * @return {?}
       */
      var ThriftSet = function() {
        return [];
      };
      return "string" != typeof name && (def = type, type = name, name = "anonymous"), ThriftSet.alias = name, ThriftSet.type = type, ThriftSet.def = def, ThriftSet.read = exports.Set.read.bind(null, ThriftSet), ThriftSet.write = exports.Set.write.bind(null, ThriftSet), ThriftSet;
    };
    /**
     * @param {?} callback
     * @param {undefined} input
     * @return {?}
     */
    exports.Set.read = function(callback, input) {
      var cb = new callback;
      var header = input.readSetBegin();
      return exports.Set.readEntries(callback, cb, input, header.size), input.readSetEnd(), cb;
    };
    /**
     * @param {!Object} config
     * @param {!Array} args
     * @param {!Float64Array} input
     * @param {number} size
     * @return {undefined}
     */
    exports.Set.readEntries = function(config, args, input, size) {
      var s;
      /** @type {number} */
      s = 0;
      for (; s < size; s++) {
        if (null != config.def) {
          args.push(config.def.read(input));
        } else {
          args.push(input.readType(config.type));
        }
      }
    };
    /**
     * @param {!Object} setdef
     * @param {!Object} output
     * @param {!Array} input
     * @return {undefined}
     */
    exports.Set.write = function(setdef, output, input) {
      var val;
      var i;
      var size = input.length;
      output.writeSetBegin(setdef.type, size);
      /** @type {number} */
      i = 0;
      for (; i < size; i++) {
        val = input[i];
        if (setdef.def) {
          setdef.def.write(output, val);
        } else {
          output.writeType(setdef.type, val);
        }
      }
      output.writeSetEnd();
    };
    exports.Map = {};
    /**
     * @param {string} name
     * @param {string} ktype
     * @param {string} vtype
     * @param {string} vdef
     * @return {?}
     */
    exports.Map.define = function(name, ktype, vtype, vdef) {
      /**
       * @return {?}
       */
      var ThriftMap = function() {
        return {};
      };
      return "string" != typeof name && (vdef = vtype, vtype = ktype, ktype = name, name = "anonymous"), ThriftMap.alias = name, ThriftMap.ktype = ktype, ThriftMap.vtype = vtype, ThriftMap.vdef = vdef, ThriftMap.read = exports.Map.read.bind(null, ThriftMap), ThriftMap.write = exports.Map.write.bind(null, ThriftMap), ThriftMap;
    };
    /**
     * @param {?} callback
     * @param {undefined} input
     * @return {?}
     */
    exports.Map.read = function(callback, input) {
      var cb = new callback;
      var header = input.readMapBegin();
      return exports.Map.readEntries(callback, cb, input, header.size), input.readMapEnd(), cb;
    };
    /**
     * @param {?} result
     * @param {!Array} args
     * @param {!Float64Array} input
     * @param {number} size
     * @return {undefined}
     */
    exports.Map.readEntries = function(result, args, input, size) {
      var s;
      var i;
      /** @type {number} */
      s = 0;
      for (; s < size; s++) {
        i = input.readType(result.ktype);
        if (null != result.vdef) {
          args[i] = result.vdef.read(input);
        } else {
          args[i] = input.readType(result.vtype);
        }
      }
    };
    /**
     * @param {!Object} mapdef
     * @param {!Object} output
     * @param {!Array} o
     * @return {undefined}
     */
    exports.Map.write = function(mapdef, output, o) {
      var key;
      var val;
      var i;
      /** @type {!Array<string>} */
      var r = Object.keys(o);
      /** @type {number} */
      var size = r.length;
      output.writeMapBegin(mapdef.ktype, mapdef.vtype, size);
      /** @type {number} */
      i = 0;
      for (; i < size; i++) {
        /** @type {string} */
        key = r[i];
        output.writeType(mapdef.ktype, key);
        val = o[key];
        if (mapdef.vdef) {
          mapdef.vdef.write(output, val);
        } else {
          output.writeType(mapdef.vtype, val);
        }
      }
      output.writeMapEnd();
    };
    exports.Struct = {};
    /**
     * @param {string} name
     * @param {!Object} fields
     * @return {?}
     */
    exports.Struct.define = function(name, fields) {
      var j;
      var field;
      var defaultValues = {};
      for (j in fields = fields || {}) {
        field = fields[j];
        defaultValues[field.alias] = field.defaultValue || null;
      }
      /**
       * @param {number} opts
       * @return {?}
       */
      var ThriftStruct = function(opts) {
        return opts = "object" === typeof opts ? opts : {}, exports.defaults({}, opts, defaultValues);
      };
      return ThriftStruct.alias = name, ThriftStruct.fields = fields, ThriftStruct.defaultValues = defaultValues, ThriftStruct.read = exports.Struct.read.bind(null, ThriftStruct), ThriftStruct.write = exports.Struct.write.bind(null, ThriftStruct), ThriftStruct.values = exports.Struct.values.bind(null, ThriftStruct), ThriftStruct.setByDef = exports.Struct.setByDef.bind(null, ThriftStruct), ThriftStruct;
    };
    /**
     * @param {!Object} structdef
     * @param {!Object} struct
     * @param {?} value
     * @return {?}
     */
    exports.Struct.setByDef = function(structdef, struct, value) {
      var f;
      var field;
      var fields = structdef.fields;
      /** @type {boolean} */
      var foundMatch = false;
      for (f in fields) {
        if ((field = fields[f]).def && value instanceof field.def) {
          struct[field.alias] = value;
          /** @type {boolean} */
          foundMatch = true;
          break;
        }
      }
      return foundMatch;
    };
    /**
     * @param {!Object} structdef
     * @param {!Object} struct
     * @return {?}
     */
    exports.Struct.values = function(structdef, struct) {
      var j;
      var index;
      var i;
      var fields = structdef.fields;
      /** @type {!Array<string>} */
      var ids = Object.keys(structdef.fields);
      /** @type {!Array} */
      var result = new Array(ids.length);
      /** @type {number} */
      i = 0;
      for (; i < ids.length; i++) {
        if (null != (index = fields[j = ids[i]].index)) {
          result[index] = struct[fields[j].alias];
        } else {
          result[i] = struct[fields[j].alias];
        }
      }
      return result;
    };
    /**
     * @param {?} options
     * @param {!Object} input
     * @return {?}
     */
    exports.Struct.read = function(options, input) {
      var struct = new options;
      return input.readStructBegin(), exports.Struct.readFields(options, input, struct), input.readStructEnd(), struct;
    };
    /**
     * @param {!Object} result
     * @param {!Object} input
     * @param {!Object} struct
     * @return {undefined}
     */
    exports.Struct.readFields = function(result, input, struct) {
      var options;
      var field;
      for (;;) {
        if ((options = input.readFieldBegin()).ftype == exports.Type.STOP) {
          return;
        }
        if ((field = result.fields[options.fid]) && exports.equals(options.ftype, field.type)) {
          if (field.def) {
            struct[field.alias] = field.def.read(input);
          } else {
            struct[field.alias] = input.readType(field.type);
          }
        } else {
          input.skip(options.ftype);
        }
        input.readFieldEnd();
      }
    };
    /**
     * @param {!Object} structdef
     * @param {!Object} output
     * @param {!Object} options
     * @return {undefined}
     */
    exports.Struct.write = function(structdef, output, options) {
      var fid;
      var field;
      var value;
      for (fid in output.writeStructBegin(structdef.alias), structdef.fields) {
        if (null !== (value = options[(field = structdef.fields[fid]).alias]) && void 0 !== value) {
          output.writeFieldBegin(field.alias, exports.serializedType(field.type), fid);
          if (field.def) {
            new field.def.write(output, value);
          } else {
            output.writeType(field.type, value);
          }
          output.writeFieldEnd();
        }
      }
      output.writeFieldStop();
      output.writeStructEnd();
    };
    exports.Exception = {};
    /**
     * @param {string} name
     * @param {!Object} fields
     * @return {?}
     */
    exports.Exception.define = function(name, fields) {
      var j;
      var field;
      var defaultValues = {};
      for (j in fields = fields || {}) {
        field = fields[j];
        defaultValues[field.alias] = field.defaultValue || null;
      }
      /**
       * @param {string} input
       * @return {undefined}
       */
      var ThriftException = function(input) {
        var dialogOptions = {};
        if ("object" == typeof input) {
          /** @type {string} */
          dialogOptions = input;
        }
        exports.defaults(this, dialogOptions, defaultValues);
        if ("string" == typeof input) {
          /** @type {string} */
          this.message = input;
        } else {
          if (input instanceof Error) {
            /** @type {string} */
            this.message = input.message;
          }
        }
      };
      return ThriftException.alias = name, ThriftException.fields = fields, ThriftException.defaultValues = defaultValues, ThriftException.read = exports.Struct.read.bind(null, ThriftException), ThriftException.write = exports.Struct.write.bind(null, ThriftException), ThriftException;
    };
    exports.TException = exports.Exception.define("TException", {
      1 : {
        alias : "message",
        type : exports.Type.STRING
      }
    });
    exports.TApplicationExceptionType = {
      UNKNOWN : 0,
      UNKNOWN_METHOD : 1,
      INVALID_MESSAGE_TYPE : 2,
      WRONG_METHOD_NAME : 3,
      BAD_SEQUENCE_ID : 4,
      MISSING_RESULT : 5,
      INTERNAL_ERROR : 6,
      PROTOCOL_ERROR : 7
    };
    exports.TApplicationException = exports.Exception.define("TApplicationException", {
      1 : {
        alias : "message",
        type : exports.Type.STRING
      },
      2 : {
        alias : "code",
        type : exports.Type.I32,
        defaultValue : exports.TApplicationExceptionType.INTERNAL_ERROR
      }
    });
    /**
     * @return {undefined}
     */
    exports.Processor = function() {
      this.methods = {};
    };
    /**
     * @param {!Object} mdef
     * @param {!Function} fn
     * @return {undefined}
     */
    exports.Processor.prototype.addMethod = function(mdef, fn) {
      this.methods[mdef.alias] = {
        def : mdef,
        fn : fn
      };
    };
    /**
     * @param {?} input
     * @param {!Object} output
     * @return {undefined}
     */
    exports.Processor.prototype.process = function(input, output) {
      var ctx;
      var def;
      var result;
      var header;
      try {
        if ((header = input.readMessageBegin()).mtype != exports.MessageType.CALL) {
          throw new exports.TException("Server expects CALL but received unsupported message type: " + header.mtype);
        }
        if (null == (ctx = me.methods[header.fname])) {
          throw new exports.TException("Unrecognized method name: " + header.fname);
        }
        (def = ctx.def).args.read(input);
        result = new def.result;
        ctx.fn.apply(null, def.args.values(args).concat([function(docs) {
          result.returnValue = docs;
          def.sendResponse(output, header.seqid, result);
        }, function(err) {
          var seqid = header ? header.seqid : -1;
          if (result && def.result.setByDef(result, err)) {
            def.sendResponse(output, header.seqid, result);
          } else {
            exports.Method.sendException(output, seqid, err);
          }
        }]));
      } catch (err) {
        console.log(err);
        var seqid = header ? header.seqid : -1;
        if (result && def.result.setByDef(result, err)) {
          def.sendResponse(output, header.seqid, result);
        } else {
          exports.Method.sendException(output, seqid, err);
        }
      }
    };
    Object.keys(exports).forEach(function(name) {
      global[name] = exports[name];
    });
  },
  207 : function(module, id, require) {
    (function(Buffer) {
      /**
       * @param {boolean} value
       * @return {undefined}
       */
      function factory(value) {
        /** @type {!Array} */
        this.queue = [];
        /** @type {number} */
        this.offset = 0;
        /** @type {boolean} */
        this.buffer = value;
      }
      /**
       * @param {?} size
       * @return {?}
       */
      factory.prototype.read = function(size) {
        if (this.offset + size > this.buffer.length) {
          throw Error("MemBuffer overrun");
        }
        var chunk = this.buffer.slice(this.offset, this.offset + size);
        return this.offset += size, chunk;
      };
      /**
       * @param {!Object} data
       * @return {undefined}
       */
      factory.prototype.write = function(data) {
        if (!Buffer.isBuffer(data)) {
          throw Error("Unsupported type sent to MemBuffer.write. Accepts Buffer.");
        }
        this.queue.push(data);
      };
      /**
       * @return {undefined}
       */
      factory.prototype.clear = function() {
        /** @type {!Array} */
        this.queue = [];
        /** @type {null} */
        this.buffer = null;
        /** @type {number} */
        this.offset = 0;
      };
      /**
       * @return {undefined}
       */
      factory.prototype.flush = function() {
        if (this.buffer) {
          this.queue.unshift(this.buffer);
        }
        this.buffer = Buffer.concat(this.queue);
        /** @type {!Array} */
        this.queue = [];
      };
      /** @type {function(boolean): undefined} */
      module.exports = factory;
    }).call(this, require(3).Buffer);
  },
  211 : function(vdwB, d, $) {
    /**
     * @param {number} utc_offset
     * @return {?}
     */
    function format(utc_offset) {
      /** @type {!Date} */
      var d = new Date(1E3 * utc_offset - 288E5);
      /** @type {number} */
      var yyyy = d.getFullYear();
      var testMiddlewares = require(d.getMonth() + 1, 2);
      var gmapsSpecs = require(d.getDate(), 2);
      var a = require(d.getHours(), 2);
      var typeAst = require(d.getMinutes(), 2);
      var defaultSuggestions = require(d.getSeconds(), 2);
      return "".concat(yyyy).concat(testMiddlewares).concat(gmapsSpecs, "T").concat(a).concat(typeAst).concat(defaultSuggestions, "Z");
    }
    /**
     * @return {?}
     */
    function f() {
      return Math.floor(Date.now() / 1E3);
    }
    /**
     * @param {!Object} data
     * @return {?}
     */
    function next(data) {
      /** @type {!Array} */
      var stops = [];
      var cache = {};
      /** @type {number} */
      var i = 0;
      for (; i < data.chapters.length; i++) {
        cache[data.chapters[i].chapterUid] = {
          title : data.chapters[i].title,
          texts : []
        };
      }
      var m = data.updated;
      m.sort(function(e, t) {
        return parseInt(e.range.split("-")[0]) - parseInt(t.range.split("-")[0]);
      });
      /** @type {number} */
      var k = 0;
      for (; k < m.length; k++) {
        cache[data.updated[k].chapterUid].texts.push(m[k].markText);
      }
      return (stops = Object.keys(cache).map(function(colorSpace) {
        return [colorSpace, cache[colorSpace]];
      })).sort(function(subtractor, subtractee) {
        return subtractor[0] - subtractee[0];
      }), data.notes = stops, data;
    }
    /**
     * @param {!Object} data
     * @return {?}
     */
    function update(data) {
      /** @type {!Array} */
      var stops = [];
      var cache = {};
      /** @type {number} */
      var i = 0;
      for (; i < data.chapters.length; i++) {
        cache[data.chapters[i].chapterUid] = {
          title : data.chapters[i].title,
          texts : []
        };
      }
      var m = data.updated;
      m.sort(function(e, t) {
        return parseInt(e.range.split("-")[0]) - parseInt(t.range.split("-")[0]);
      });
      /** @type {number} */
      var k = 0;
      for (; k < m.length; k++) {
        cache[data.updated[k].chapterUid].texts.push(m[k].markText);
      }
      (stops = Object.keys(cache).map(function(colorSpace) {
        return [colorSpace, cache[colorSpace]];
      })).sort(function(subtractor, subtractee) {
        return subtractor[0] - subtractee[0];
      });
      /** @type {string} */
      var value = "<div><h1>".concat(data.book.title, "</h1><h5>").concat(data.book.author, "</h5><hr />");
      return stops.forEach(function(foundJobs1) {
        value = value + '<div style="margin-bottom: 30px;"><p style="font-weight: bold;">'.concat(foundJobs1[1].title, "</p>");
        foundJobs1[1].texts.forEach(function(ch) {
          value = value + '<p style="margin-left: 40px; margin-top: 18px;">'.concat(ch, "</p>");
        });
        /** @type {string} */
        value = value + "</div>";
      }), value = value + "</div>", data.html = value, data;
    }
    $.r(d);
    var x = $(0);
    var global = $.n(x);
    var node = $(108);
    var tok = $.n(node);
    var pkg = ($(115), $(11));
    var self = $(12);
    var e = $(15);
    var schema = $(27);
    var options = $(14);
    var data = $(28);
    var __WEBPACK_IMPORTED_MODULE_20_date_fns_min__ = ($(116), $(117), $(109));
    var root = $.n(__WEBPACK_IMPORTED_MODULE_20_date_fns_min__);
    var z = $(29);
    var typeObject = function() {
      /**
       * @param {?} o
       * @return {undefined}
       */
      function e(o) {
        var key;
        for (key in Object(pkg.a)(this, e), this.enInfoFunc = o, z.a.prototype) {
          if (-1 === key.indexOf("_") && "function" === typeof z.a.prototype[key]) {
            this[key] = this.createWrapperFunction(key);
          }
        }
      }
      return Object(self.a)(e, [{
        key : "getThriftClient",
        value : function() {
          return this._thriftClient || (this._thriftClient = this.enInfoFunc().then(function(parameters) {
            var t = parameters.token;
            var view = parameters.url;
            return new z.a({
              token : t,
              url : view
            });
          })), this._thriftClient;
        }
      }, {
        key : "createWrapperFunction",
        value : function(k) {
          var self = this;
          return function() {
            /** @type {number} */
            var arglen = arguments.length;
            /** @type {!Array} */
            var args = new Array(arglen);
            /** @type {number} */
            var i = 0;
            for (; i < arglen; i++) {
              args[i] = arguments[i];
            }
            return self.getThriftClient().then(function(t) {
              return t[k].apply(t, args);
            });
          };
        }
      }, {
        key : "getParamNames",
        value : function(funcToEval) {
          var splitted_filename = funcToEval.toString();
          return splitted_filename.slice(splitted_filename.indexOf("(") + 1, splitted_filename.indexOf(")")).match(/([^\s,]+)/g);
        }
      }]), e;
    }();
    var Node = function() {
      /**
       * @return {undefined}
       */
      function notify() {
        var defaultServiceHost;
        var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        Object(pkg.a)(this, notify);
        this.consumerKey = options.consumerKey;
        this.consumerSecret = options.consumerSecret;
        this.sandbox = void 0 === options.sandbox || options.sandbox;
        /** @type {boolean} */
        this.china = !!options.china;
        this.token = options.token;
        /** @type {string} */
        defaultServiceHost = this.sandbox ? "sandbox.yinxiang.com" : this.china ? "app.yinxiang.com" : "www.evernote.com";
        this.serviceHost = options.serviceHost || defaultServiceHost;
      }
      return Object(self.a)(notify, [{
        key : "getRequestToken",
        value : function(eq, t) {
          this.getOAuthClient(eq).getOAuthRequestToken(function(e, val_error, results, debugState) {
            t(e, val_error, results, debugState);
          });
        }
      }, {
        key : "getAuthorizeUrl",
        value : function(e) {
          return "".concat(this.getEndpoint("OAuth.action"), "?oauth_token=").concat(e);
        }
      }, {
        key : "getAccessToken",
        value : function(code, secret, callback, a) {
          var recipient = this;
          this.getOAuthClient("").getOAuthAccessToken(code, secret, callback, function(s, key, Unique, sweep) {
            /** @type {string} */
            recipient.token = key;
            a(s, key, Unique, sweep);
          });
        }
      }, {
        key : "getUserStore",
        value : function() {
          return this._userStore || (this._userStore = new z.b({
            token : this.token,
            url : this.getEndpoint("/edam/user")
          })), this._userStore;
        }
      }, {
        key : "getNoteStore",
        value : function(e) {
          var self = this;
          return e && (this.noteStoreUrl = e), new typeObject(function() {
            return self.noteStoreUrl ? Promise.resolve({
              token : self.token,
              url : self.noteStoreUrl
            }) : self.getUserStore().getUserUrls().then(function(args) {
              return self.noteStoreUrl = args.noteStoreUrl, {
                token : self.token,
                url : args.noteStoreUrl
              };
            });
          });
        }
      }, {
        key : "getSharedNoteStore",
        value : function(linkedNotebook) {
          var client = this;
          return new typeObject(function() {
            var cache = client[linkedNotebook.sharedNotebookGlobalId];
            return cache && cache.sharedToken ? Promise.resolve({
              token : cache.sharedToken,
              url : linkedNotebook.noteStoreUrl
            }) : client.getNoteStore().authenticateToSharedNotebook(linkedNotebook.sharedNotebookGlobalId).then(function(session) {
              var token = session.authenticationToken;
              return client[linkedNotebook.sharedNotebookGlobalId] = {
                sharedToken : token
              }, {
                token : token,
                url : linkedNotebook.noteStoreUrl
              };
            });
          });
        }
      }, {
        key : "getBusinessNoteStore",
        value : function() {
          var thisStore = this;
          return new typeObject(function() {
            return thisStore.bizToken && thisStore.bizNoteStoreUrl ? Promise.resolve({
              token : thisStore.bizToken,
              url : thisStore.bizNoteStoreUrl
            }) : thisStore.getUserStore().authenticateToBusiness().then(function(bizAuth) {
              return thisStore.bizToken = bizAuth.authenticationToken, thisStore.bizNoteStoreUrl = bizAuth.noteStoreUrl, thisStore.bizUser = bizAuth.user, {
                token : bizAuth.authenticationToken,
                url : bizAuth.noteStoreUrl
              };
            });
          });
        }
      }, {
        key : "getEndpoint",
        value : function(n) {
          /** @type {string} */
          var r = "https://" + this.serviceHost;
          return n && (r = "".concat(r, "/").concat(n)), r;
        }
      }, {
        key : "getOAuthClient",
        value : function(cb) {
          return new root.a.OAuth(this.getEndpoint("oauth"), this.getEndpoint("oauth"), this.consumerKey, this.consumerSecret, "1.0", cb, "HMAC-SHA1");
        }
      }]), notify;
    }();
    var libs = ($(208), $(36));
    /** @type {function(number, number): ?} */
    var require = (JSON.parse('[{"book":{"author":"\u963f\u5170\u00b7\u5fb7\u6ce2\u987f","bookId":"25926884","bookStatus":1,"cover":"https://wfqqreader-1252317822.image.myqcloud.com/cover/884/25926884/s_25926884.jpg","format":"epub","soldout":0,"title":"\u8eab\u4efd\u7684\u7126\u8651\uff08\u8bd1\u6587\u7ecf\u5178\uff09","version":2072667765},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"@\u6210\u90fd\u4e0b\u6c34\u9053","bookId":"23691217","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/217/23691217/s_23691217.jpg","format":"epub","soldout":0,"title":"\u53ea\u6709\u7537\u79d1\u533b\u751f\u77e5\u9053","version":1210198096},"chapters":[{"bookId":"23691217","chapterIdx":86,"chapterUid":86,"title":"2\uff0e\u4eff\u5236\u836f\u4e3a\u4ec0\u4e48\u5728\u4e2d\u56fd\u6709\u5e7f\u9614\u7684\u5e02\u573a\uff1f"},{"bookId":"23691217","chapterIdx":85,"chapterUid":85,"title":"1\uff0e\u6211\u8981\u611f\u8c22\u4eff\u5236\u836f\u6551\u4e86\u6211\u7684\u60a3\u8005"},{"bookId":"23691217","chapterIdx":90,"chapterUid":90,"title":"1\uff0e\u6211\u7684\u7231\u60c5\u9e1f\u5c31\u8fd9\u6837\u98de\u8d70\u4e86"},{"bookId":"23691217","chapterIdx":93,"chapterUid":93,"title":"\u7ed3\u675f\u8bed"},{"bookId":"23691217","chapterIdx":87,"chapterUid":87,"title":"3\uff0e\u4e2d\u56fd\u5230\u5e95\u8fd8\u6709\u591a\u5c11\u201c\u9646\u52c7\u201d\u8fd9\u6837\u7684\u60a3\u8005\uff1f"}],"removed":[],"synckey":1583408587,"updated":[{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_90_572-674","chapterUid":90,"createTime":1583408587,"markText":"2009\u5e743\u67084\u65e5\uff0c\u4e00\u4e2a\u975e\u5e38\u666e\u901a\u7684\u65e5\u5b50\uff0c\u53ea\u4e0d\u8fc7\u90a3\u5929\u662f\u661f\u671f\u4e09\uff0c\u4e0a\u5348\u662f\u6211\u7ea6\u5b9a\u4fd7\u6210\u7684\u4e13\u5bb6\u95e8\u8bca\uff0c\u4e0b\u5348\u6709\u4e24\u53f0\u7ecf\u5c3f\u9053\u524d\u5217\u817a\u7535\u5207\u672f\uff08TURP\uff09\u3001\u4e00\u53f0\u7ecf\u5c3f\u9053\u8180\u80f1\u80bf\u7624\u7535\u5207\u672f\uff08TURB\uff09\u53ca\u4e24\u53f0\u7ecf\u76ae\u80be\u955c\u94ac\u6fc0\u5149\u788e\u77f3\u672f\uff08PCN\uff09\u3002","range":"572-674","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_87_577-776","chapterUid":87,"createTime":1583408562,"markText":"\u7535\u5f71\u300a\u6211\u4e0d\u662f\u836f\u795e\u300b\u6839\u636e\u9646\u52c7\u7684\u4e8b\u8ff9\u6539\u7f16\u3002\u9646\u52c7\uff0c\u6c5f\u82cf\u65e0\u9521\u4eba\uff0c\u5bb6\u5883\u6bb7\u5b9e\uff0c34\u5c81\u7684\u4ed6\u88ab\u68c0\u67e5\u51fa\u60a3\u6709\u6162\u6027\u7c92\u7ec6\u80de\u6027\u767d\u8840\u75c5\uff0c2002\u5e74\uff0c\u5f53\u65f6\u533b\u751f\u63a8\u8350\u4ed6\u670d\u7528\u745e\u58eb\u8bfa\u534e\u516c\u53f8\u751f\u4ea7\u7684\u540d\u4e3a\u201c\u683c\u5217\u536b\u201d\u7684\u6297\u764c\u836f\u3002\u670d\u7528\u8fd9\u79cd\u836f\u54c1\uff0c\u53ef\u4ee5\u7a33\u5b9a\u75c5\u60c5\u3001\u6b63\u5e38\u751f\u6d3b\uff0c\u4f46\u9700\u4e0d\u95f4\u65ad\u670d\u7528\u3002\u8fd9\u79cd\u836f\u54c1\u7684\u552e\u4ef7\u662f23500\u5143\u4e00\u76d2\uff0c\u4e00\u540d\u6162\u7c92\u767d\u8840\u75c5\u60a3\u8005\u6bcf\u4e2a\u6708\u9700\u8981\u670d\u7528\u4e00\u76d2\uff0c\u836f\u8d39\u52a0\u6cbb\u7597\u8d39\u7528\u51e0\u4e4e\u638f\u7a7a\u4e86\u4ed6\u7684\u5bb6\u5e95\u3002","range":"577-776","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_3308-3319","chapterUid":86,"createTime":1583408546,"markText":"\u65e5\u66ae\u9ec4\u660f\u8fdf\uff0c\u98ce\u8d77\u65e7\u4e8b\u96e8","range":"3308-3319","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_3205-3278","chapterUid":86,"createTime":1583408541,"markText":"\u770b\u7535\u5f71\u300a\u6211\u4e0d\u662f\u836f\u795e\u300b\uff0c\u5fc3\u60c5\u538b\u6291\u5230\u4e86\u6781\u70b9\uff0c\u5c24\u5176\u662f\u65e0\u6570\u767d\u8840\u75c5\u75c5\u4eba\u6234\u7740\u53e3\u7f69\u9001\u52c7\u54e5\u53bb\u76d1\u72f1\u7684\u65e0\u58f0\u4e00\u5e55\uff0c\u800c\u5b9e\u73b0\u4e86\u7075\u9b42\u6551\u8d4e\u7684\u52c7\u54e5\uff0c\u628a\u6240\u6709\u7684\u5b64\u72ec\u56ca\u62ec\uff0c\u72ec\u594f\u4e00\u66f2\u60b2\u6b4c","range":"3205-3278","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_2958-2974","chapterUid":86,"createTime":1583408531,"markText":"\u4e3a\u56ca\u4e2d\u7f9e\u6da9\u7684\u75c5\u4eba\u63a8\u8350\u5370\u5ea6\u4eff\u5236\u836f\u3002","range":"2958-2974","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_2687-2723","chapterUid":86,"createTime":1583408525,"markText":"\u8f89\u745e\u516c\u53f8\u4e5f\u5728\u4e0d\u65ad\u5730\u8c03\u6574\u5728\u4e2d\u56fd\u7684\u7b56\u7565\uff0c\u6839\u636e\u4e2d\u56fd\u4e0d\u540c\u5730\u533a\u7684\u5177\u4f53\u60c5\u51b5\uff0c\u964d\u4f4e\u836f\u4ef7","range":"2687-2723","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_2492-2574","chapterUid":86,"createTime":1583408520,"markText":"\u5168\u4e16\u754c\u6240\u6709\u7684\u77e5\u540d\u836f\u4f01\u90fd\u4e00\u6837\uff0c\u4e0a\u5e02\u4e00\u79cd\u65b0\u836f\uff0c\u7814\u53d1\u6210\u672c\u5927\u62b5\u572820\u4ebf\uff5e30\u4ebf\u7f8e\u5143\u4e4b\u95f4\uff0c\u4eff\u5236\u836f\u76f4\u63a5\u8df3\u8fc7\u4e86\u524d\u671f\u7684\u7814\u53d1\uff0c\u6309\u7167\u5df2\u6709\u7684\u914d\u65b9\u548c\u6280\u672f\u751f\u4ea7\uff0c\u6210\u672c\u548c\u5b9a\u4ef7\u81ea\u7136\u4f4e\u5230\u5c18\u57c3\u91cc\u53bb\u4e86\u3002","range":"2492-2574","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_2231-2331","chapterUid":86,"createTime":1583408508,"markText":"\u8fd8\u6709\u4e00\u79cd\u73b0\u8c61\u5982\u9ca0\u5728\u5589\uff0c\u5728\u4e2d\u56fd\uff0c\u6bcf\u5f53\u836f\u54c1\u906d\u9047\u964d\u4ef7\uff0c\u4e00\u4e9b\u6551\u547d\u836f\u4f1a\u6d88\u5931\u30022015\u5e748\u6708\uff0c\u56e0\u4e3a\u653e\u7ebf\u83cc\u7d20D\u7f3a\u8d27\uff0c\u8ba9\u65e0\u6570\u6ecb\u517b\u7ec6\u80de\u80bf\u7624\u75c5\u4eba\u9677\u5165\u56f0\u5883\u3002\u7ed3\u679c\u6211\u4e0e\u51e0\u4e2a\u533b\u7597\u5927V\u5728\u5fae\u535a\u4e0a\u7684\u547c\u5401\uff0c\u6682\u65f6\u89e3\u51b3\u4e86\u836f\u54c1\u7684\u751f\u4ea7\u548c\u4f9b\u5e94\u95ee\u9898","range":"2231-2331","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_1976-1994","chapterUid":86,"createTime":1583408502,"markText":"\u4e2d\u56fd\u4eff\u5236\u836f\u4e0e\u539f\u7814\u836f\u76f8\u6bd4\uff0c\u6ca1\u6709\u4ef7\u683c\u4f18\u52bf","range":"1976-1994","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_1853-1937","chapterUid":86,"createTime":1583408489,"markText":"\u4e2d\u56fd\u4e5f\u662f\u4eff\u5236\u836f\u5927\u56fd\uff0c\u6709\u4e00\u4e2a\u975e\u5e38\u4e25\u5cfb\u7684\u4e8b\u5b9e\uff0c\u4e2d\u56fd5000\u5bb6\u836f\u4f01\u7ea6\u670990%\u662f\u4eff\u5236\u836f\u4f01\u4e1a\uff0c\u5df2\u6709\u768418.9\u4e07\u4e2a\u836f\u54c1\u6279\u6587\u4e2d\uff0c95%\u4ee5\u4e0a\u4e3a\u4eff\u5236\u836f\uff0c\u4eff\u5236\u836f\u7684\u8d28\u91cf\u8fdc\u8fdc\u900a\u8272\u4e8e\u5370\u5ea6\u4eff\u5236\u836f\u3002","range":"1853-1937","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_1669-1736","chapterUid":86,"createTime":1583408471,"markText":"\u6b27\u7f8e\u5404\u56fd\u5df2\u7ecf\u61d2\u5f97\u4e0e\u5370\u5ea6\u8ba1\u8f83\u4e86\uff0c\u4e0d\u5c11\u5236\u836f\u516c\u53f8\u4e0e\u5370\u5ea6\u4eff\u5236\u836f\u5382\u7b7e\u7f72\u4e86\u4fdd\u5bc6\u534f\u8bae\uff0c\u53c2\u4e0e\u836f\u54c1\u9500\u552e\u7684\u5206\u6210\uff0c\u751a\u81f3\uff0c\u8d85\u8fc720%\u4ee5\u4e0a\u7684\u4eff\u5236\u836f\u8fd4\u9500\u5230\u6b27\u7f8e\u56fd\u5bb6","range":"1669-1736","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_1597-1638","chapterUid":86,"createTime":1583408451,"markText":"\u8be5\u5ba3\u8a00\u660e\u786e\u4e86\u5404\u6210\u5458\u56fd\u6709\u6743\u6279\u51c6\u5f3a\u5236\u4e13\u5229\u8bb8\u53ef\uff0c\u5e76\u4e14\u53ef\u4ee5\u81ea\u7531\u51b3\u5b9a\u6279\u51c6\u5f3a\u5236\u4e13\u5229\u8bb8\u53ef\u7684\u7406\u7531\u3002","range":"1597-1638","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_1325-1343","chapterUid":86,"createTime":1583408430,"markText":"\u5370\u5ea6\u4e3a\u4ec0\u4e48\u53ef\u4ee5\u660e\u76ee\u5f20\u80c6\u5730\u751f\u4ea7\u4eff\u5236\u836f\u5462","range":"1325-1343","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_852-911","chapterUid":86,"createTime":1583408422,"markText":"\u7d22\u78f7\u5e03\u97e6\u662f\u7b2c\u4e00\u4e2a\u6297\u4e19\u809d\u75c5\u6bd2\u7684\u6838\u82f7\u7c7b\u805a\u5408\u9176\u6291\u5236\u5242\uff0c\u7f8e\u56fd\u5409\u5229\u5fb7\u516c\u53f8\u7814\u53d1\uff0c2013\u5e74\u5728\u7f8e\u56fd\u4e0a\u5e02\uff0c\u5bf9\u4e19\u809d\u7684\u6cbb\u6108\u7387\u9ad8\u8fbe90%\u4ee5\u4e0a","range":"852-911","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_86_616-728","chapterUid":86,"createTime":1583408416,"markText":"\u4e19\u809d\uff0c\u901a\u8fc7\u8840\u6db2\u9014\u5f84\u4f20\u67d3\uff0c\u662f\u4e00\u79cd\u51f6\u9669\u7684\u6162\u6027\u809d\u75c5\uff0c\u4fdd\u5b88\u4f30\u8ba1\uff0c\u5168\u56fd\u7684\u4e19\u809d\u75c5\u4eba\u8d85\u8fc71000\u4e07\uff0c\u6162\u6027\u809d\u75c5\u7684\u4e09\u90e8\u66f2\uff0c\u6162\u6027\u809d\u708e\u5230\u809d\u786c\u5316\u5230\u809d\u764c\u3002\u800c\u4e19\u809d\u7684\u7279\u6b8a\u6027\u5728\u4e8e\uff0c\u4e0d\u7ecf\u8fc7\u809d\u786c\u5316\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ece\u6162\u6027\u809d\u708e\u53d1\u5c55\u5230\u809d\u764c\uff0c\u5728\u4e2d\u56fd\uff0c\u8fd9\u662f\u4e00\u79cd\u6b7b\u4ea1\u7387\u8d85\u9ad8\u7684\u75be\u75c5","range":"616-728","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_85_2344-2368","chapterUid":85,"createTime":1583408409,"markText":"\u6487\u9664\u6211\u7684\u533b\u751f\u8eab\u4efd\uff0c\u4f5c\u4e3a\u75c5\u4eba\u5bb6\u5c5e\uff0c\u6211\u611f\u8c22\u5370\u5ea6\u4eff\u5236\u836f","range":"2344-2368","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_85_2194-2237","chapterUid":85,"createTime":1583408405,"markText":"\u7ec8\u4e8e\u820d\u5f03\u4e86\u6211\u8ba8\u538c\u7684\u4e2d\u836f\uff0c\u5728\u968f\u540e\u51e0\u5e74\u7684CT\u68c0\u67e5\u4e2d\uff0c\u7236\u4eb2\u7684\u60c5\u51b5\u4e00\u76f4\u5f88\u597d\uff0c\u8fc4\u4eca\u5065\u5728\uff0c\u8eab\u4f53\u77cd\u94c4","range":"2194-2237","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_85_1880-2003","chapterUid":85,"createTime":1583408401,"markText":"\u4f46\u662f\uff0c\u82f1\u56fd\u963f\u65af\u5229\u5eb7\u539f\u7248\u6613\u745e\u6c99\u7684\u4ef7\u683c\u662f\u6bcf\u76d215000\uff0c0.25\u514b\u00d710\u7247\uff0c\u6bcf\u5929\u4e00\u7247\uff0c\u5f53\u65f6\u6ca1\u6709\u8fdb\u5165\u533b\u4fdd\u76ee\u5f55\uff0c\u5bf9\u4e8e\u7ecf\u6d4e\u6761\u4ef6\u5c1a\u53ef\u7684\u6211\u6765\u8bf4\uff0c\u6bcf\u670845000\u7684\u82b1\u8d39\u8fd8\u662f\u663e\u5f97\u6c89\u91cd\u3002\u524d\u59b9\u592b\u5efa\u8bae\uff1a\u7528\u5370\u5ea6\u4eff\u5236\u836f\u5427\uff0c\u6548\u679c\u4e00\u6837\u4e00\u6837\u7684\uff0c\u800c\u4e14\u4eff\u5236\u836f\u662f\u6bcf\u76d230\u7247\uff0c\u4ef7\u683c2500\u5143","range":"1880-2003","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_85_1423-1470","chapterUid":85,"createTime":1583408392,"markText":"\u8f6c\u9053\u53bb\u592a\u5347\u5357\u8def\u7684\u4e2d\u56fd\u79fb\u52a8\u8425\u4e1a\u5385\uff0c\u5c3d\u7ba1\u6211\u662fVIP\u4e94\u661f\u5ba2\u6237\uff0c\u6362\u5361\u548c\u4e70\u65b0\u624b\u673a\u7684\u8fc7\u7a0b\u4e5f\u8017\u8d39\u4e86\u534a\u4e2a\u591a\u5c0f\u65f6","range":"1423-1470","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_85_925-988","chapterUid":85,"createTime":1583408387,"markText":"\u7236\u4eb2\u7b03\u4fe1\u4e2d\u533b\uff0c\u4e8e\u662f\u6211\u59d4\u6258\u5404\u79cd\u5173\u7cfb\uff0c\u5e26\u7236\u4eb2\u53bb\u770b\u4e86\u6210\u90fd\u6700\u8457\u540d\u7684\u540d\u8001\u4e2d\u533b\uff0c\u4ed6\u5f00\u51fa\u4e86\u4e09\u4e2a\u6708\u7684\u4e2d\u836f\uff0c\u5176\u4e2d\u5305\u62ec\u87d1\u8782\u7c89\u3001\u5730\u726f\u725b\u3001\u6700\u4e0a\u7b49\u7684\u6d77\u53c2","range":"925-988","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_85_819-895","chapterUid":85,"createTime":1583408383,"markText":"\u7b2c\u4e00\u6b21\u63a5\u89e6\u5370\u5ea6\u4eff\u5236\u836f\uff0c\u662f\u57282010\u5e741\u6708\uff0c\u6211\u7684\u7236\u4eb2\u80ba\u764c\u672f\u540e\u4e0d\u5230\u4e00\u4e2a\u6708\uff0c\u56e0\u4e3a\u662f\u665a\u671f\uff0c\u80f8\u5916\u79d1\u6559\u6388\u5efa\u8bae\u5316\u7597\uff0c\u4f46\u6743\u8861\u5229\u5f0a\u7684\u7ed3\u679c\uff0c\u6211\u4e0e\u540c\u4e3a\u533b\u751f\u7684\u59b9\u59b9\u5546\u91cf\uff0c\u653e\u5f03\u5316\u7597","range":"819-895","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_85_692-744","chapterUid":85,"createTime":1583408377,"markText":"\u89c2\u5f71\u611f\u53d7\uff1a\u6211\u5df2\u7ecf\u4e0d\u80fd\u7528\u597d\u770b\u6765\u7b80\u5355\u5f62\u5bb9\uff0c\u56e0\u4e3a\u6545\u4e8b\u89e6\u52a8\u4e86\u6211\u5fc3\u5e95\u6700\u67d4\u8f6f\u7684\u90e8\u5206\uff0c\u60c5\u6000\u4e2d\u7684\u611f\u52a8\uff0c\u6162\u6162\u53d8\u6210\u4e00\u884c\u884c\u773c\u6cea","range":"692-744","style":1,"type":1},{"bookId":"23691217","bookVersion":1210198096,"bookmarkId":"23691217_93_411-623","chapterUid":93,"createTime":1583408364,"markText":"\u56db\u5e74\u524d\uff0c\u4e0e\u6bcd\u6821\uff08\u539f\u540c\u6d4e\u533b\u79d1\u5927\u5b66\uff0c\u73b0\u534e\u4e2d\u79d1\u6280\u5927\u5b66\u540c\u6d4e\u533b\u5b66\u9662\uff09\u5728\u8bfb\u516b\u5e74\u5236\u7684\u67d0\u4e34\u5e8a\u533b\u5b66\u751f\u79c1\u804a\uff0c\u4ed6\u8bf4\uff1a\u4e0b\u8001\u5e08\uff0c\u6211\u60f3\u5bf9\u4f60\u8bf4\u4e09\u4e2a\u5b57\uff0c\u6211\u70ed\u7231\u533b\u5b66\u3002\u660e\u660e\u4e94\u4e2a\u5b57\u561b\uff1f\u4ed6\u65a9\u9489\u622a\u94c1\u5730\u544a\u8bc9\u6211\uff1a\u5c31\u662f\u4e09\u4e2a\u5b57\uff0c\u6211\u70ed\u7231\uff0c\u56e0\u4e3a\u533b\u5b66\u5df2\u7ecf\u5728\u6211\u5fc3\u4e2d\uff01\u6211\u7684\u540e\u80cc\u542b\u84c4\u5730\u8d77\u4e86\u4e00\u5806\u9e21\u76ae\u7599\u7629\uff0c\u672c\u6765\u4ee5\u4e3a\u201c\u4e00\u6b65\u4e00\u4e2a\u811a\u5370\u201d\u8fd9\u53e5\u8bdd\uff0c\u662f\u5bf9\u80d6\u5b50\u6700\u523b\u8584\u3001\u6700\u8f9b\u8fa3\u7684\u8bbd\u523a\u3002\u73b0\u5728\u6211\u660e\u767d\u4e86\uff0c\u201c\u4e00\u6b65\u4e00\u4e2a\u811a\u5370\u201d\u662f\u5bf9\u5b71\u5f31\u533b\u5b66\u751f\u8270\u96be\u8dcb\u6d89\u7684\u6700\u9ad8\u5956\u8d4f\u3002","range":"411-623","style":1,"type":1}]},{"book":{"author":"Sam Newman","bookId":"907756","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/756/907756/s_907756.jpg","format":"epub","soldout":0,"title":"\u5fae\u670d\u52a1\u8bbe\u8ba1","version":811927273},"chapters":[{"bookId":"907756","chapterIdx":21,"chapterUid":21,"title":"2.6 \u4ee3\u7801\u6cbb\u7406"},{"bookId":"907756","chapterIdx":10,"chapterUid":10,"title":"1.2 \u4e3b\u8981\u597d\u5904"},{"bookId":"907756","chapterIdx":20,"chapterUid":20,"title":"2.5 \u8981\u6c42\u7684\u6807\u51c6"},{"bookId":"907756","chapterIdx":9,"chapterUid":9,"title":"1.1 \u4ec0\u4e48\u662f\u5fae\u670d\u52a1"},{"bookId":"907756","chapterIdx":8,"chapterUid":8,"title":"\u7b2c1\u7ae0 \u5fae\u670d\u52a1"}],"removed":[],"synckey":1583408587,"updated":[{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_20_1110-1186","chapterUid":20,"createTime":1583284946,"markText":"\u4f60\u53ef\u4ee5\u4f7f\u7528Graphite\u6765\u6536\u96c6\u6307\u6807\u6570\u636e\uff0c\u4f7f\u7528Nagios\u6765\u68c0\u6d4b\u5065\u5eb7\u72b6\u6001\uff0c\u6216\u8005\u4f7f\u7528\u8f6e\u8be2\u7cfb\u7edf\u6765\u4ece\u5404\u4e2a\u8282\u70b9\u6536\u96c6\u6570\u636e\uff0c\u4f46\u65e0\u8bba\u4f60\u7684\u9009\u62e9\u662f\u4ec0\u4e48\uff0c\u90fd\u5e94\u5c3d\u91cf\u4fdd\u6301\u6807\u51c6\u5316","range":"1110-1186","style":1,"type":1},{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_21_2788-2880","chapterUid":21,"createTime":1582975426,"markText":"\u8fd8\u6709\u4e00\u4e9b\u6211\u63a5\u89e6\u8fc7\u7684\u56e2\u961f\uff0c\u628a\u670d\u52a1\u4ee3\u7801\u6a21\u677f\u7b80\u5355\u5730\u505a\u6210\u4e86\u4e00\u4e2a\u5171\u4eab\u7684\u5e93\u4f9d\u8d56\uff0c\u8fd9\u65f6\u4ed6\u4eec\u5c31\u8981\u975e\u5e38\u5c0f\u5fc3\u5730\u9632\u6b62\u5bf9DRY\uff08Don\'t Repeat Yourself\uff0c\u907f\u514d\u91cd\u590d\u4ee3\u7801\uff09\u7684\u8ffd\u6c42\u5bfc\u81f4\u7cfb\u7edf\u8fc7\u5ea6\u8026\u5408","range":"2788-2880","style":1,"type":1},{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_10_1617-1626","chapterUid":10,"createTime":1582773147,"markText":"\u5fae\u670d\u52a1\u5982\u4f55\u5bfb\u627e\u5e73\u8861","range":"1617-1626","style":1,"type":1},{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_10_758-815","chapterUid":10,"createTime":1582772998,"markText":"\u793e\u4ea4\u7f51\u7edc\u6765\u8bf4\uff0c\u56fe\u6570\u636e\u5e93\u80fd\u591f\u66f4\u597d\u5730\u5904\u7406\u7528\u6237\u4e4b\u95f4\u7684\u4ea4\u4e92\u64cd\u4f5c\uff0c\u4f46\u662f\u5bf9\u4e8e\u7528\u6237\u53d1\u5e03\u7684\u5e16\u5b50\u800c\u8a00\uff0c\u6587\u6863\u6570\u636e\u5e93\u53ef\u80fd\u662f\u4e00\u4e2a\u66f4\u597d\u7684\u9009\u62e9","range":"758-815","style":1,"type":1},{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_9_1484-1523","chapterUid":9,"createTime":1582772864,"markText":"\u4e00\u4e2a\u5fae\u670d\u52a1\u5e94\u8be5\u53ef\u4ee5\u5728\u4e24\u5468\u5185\u5b8c\u5168\u91cd\u5199\uff0c\u8fd9\u4e2a\u7ecf\u9a8c\u6cd5\u5219\u5728\u4ed6\u6240\u5904\u7684\u7279\u5b9a\u4e0a\u4e0b\u6587\u4e2d\u662f\u6709\u6548\u7684","range":"1484-1523","style":1,"type":1},{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_9_1060-1095","chapterUid":9,"createTime":1582772844,"markText":"\u628a\u56e0\u76f8\u540c\u539f\u56e0\u800c\u53d8\u5316\u7684\u4e1c\u897f\u805a\u5408\u5230\u4e00\u8d77\uff0c\u800c\u628a\u56e0\u4e0d\u540c\u539f\u56e0\u800c\u53d8\u5316\u7684\u4e1c\u897f\u5206\u79bb\u5f00\u6765","range":"1060-1095","style":1,"type":1},{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_9_422-441","chapterUid":9,"createTime":1582772787,"markText":"\u5fae\u670d\u52a1\u5c31\u662f\u4e00\u4e9b\u534f\u540c\u5de5\u4f5c\u7684\u5c0f\u800c\u81ea\u6cbb\u7684\u670d\u52a1","range":"422-441","style":1,"type":1},{"bookId":"907756","bookVersion":811927273,"bookmarkId":"907756_8_628-672","chapterUid":8,"createTime":1582772684,"markText":"\u6301\u7eed\u4ea4\u4ed8\u7406\u8bba\u544a\u8bc9\u6211\u4eec\u5982\u4f55\u66f4\u6709\u6548\u53ca\u66f4\u9ad8\u6548\u5730\u53d1\u5e03\u8f6f\u4ef6\u4ea7\u54c1\uff0c\u5e76\u6307\u51fa\u4fdd\u6301\u6bcf\u6b21\u63d0\u4ea4\u5747\u53ef\u53d1\u5e03\u7684\u91cd\u8981\u6027","range":"628-672","style":1,"type":1}]},{"book":{"author":"\u745e\u00b7\u8fbe\u5229\u6b27","bookId":"921568","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/568/921568/s_921568.jpg","format":"epub","soldout":0,"title":"\u539f\u5219","version":1393326549},"chapters":[{"bookId":"921568","chapterIdx":4,"chapterUid":4,"title":"\u5bfc\u8a00"}],"removed":[],"synckey":1583408587,"updated":[{"bookId":"921568","bookVersion":1393326549,"bookmarkId":"921568_4_3830-3865","chapterUid":4,"createTime":1582948490,"markText":"\u4e00\u79cd\u5065\u5eb7\u7684\u5bb3\u6015\u72af\u9519\u7684\u4e60\u60ef\uff0c\u5e76\u601d\u8003\u51fa\u4e86\u4e00\u79cd\u80fd\u5c06\u72af\u9519\u53ef\u80fd\u6027\u6700\u5c0f\u5316\u7684\u51b3\u7b56\u65b9\u5f0f","range":"3830-3865","style":1,"type":1},{"bookId":"921568","bookVersion":1393326549,"bookmarkId":"921568_4_3257-3311","chapterUid":4,"createTime":1582948442,"markText":"\u201c\u6b63\u786e\u5730\u5931\u8d25\u201d\u662f\u6307\uff0c\u80fd\u591f\u5728\u7ecf\u5386\u75db\u82e6\u7684\u5931\u8d25\u7684\u8fc7\u7a0b\u4e2d\u5438\u53d6\u91cd\u8981\u7684\u6559\u8bad\uff0c\u4ece\u800c\u907f\u514d\u201c\u9519\u8bef\u5730\u5931\u8d25\u201d\uff0c\u5373\u56e0\u4e3a\u5931\u8d25\u800c\u88ab\u8e22\u51fa\u5c40","range":"3257-3311","style":1,"type":1},{"bookId":"921568","bookVersion":1393326549,"bookmarkId":"921568_4_2167-2290","chapterUid":4,"createTime":1582948381,"markText":"\u72ec\u7acb\u601d\u8003\u5e76\u51b3\u5b9a\uff1a\uff081\uff09\u4f60\u60f3\u8981\u4ec0\u4e48\uff1b\uff082\uff09\u4e8b\u5b9e\u662f\u4ec0\u4e48\uff1b\uff083\uff09\u9762\u5bf9\u4e8b\u5b9e\uff0c\u4f60\u5982\u4f55\u5b9e\u73b0\u81ea\u5df1\u7684\u613f\u671b\u2026\u2026\u2026\u2026\u800c\u4e14\u8981\u4fdd\u6301\u8c26\u900a\u548c\u5fc3\u80f8\u5f00\u9614\uff0c\u4ee5\u4fbf\u4f60\u80fd\u52a8\u7528\u81ea\u5df1\u7684\u6700\u4f73\u601d\u7ef4\u3002","range":"2167-2290","style":1,"type":1},{"bookId":"921568","bookVersion":1393326549,"bookmarkId":"921568_4_1124-1151","chapterUid":4,"createTime":1582948301,"markText":"\u505a\u4e00\u4e2a\u6709\u539f\u5219\u7684\u4eba\u610f\u5473\u7740\uff0c\u603b\u662f\u4f9d\u636e\u53ef\u4ee5\u6e05\u6670\u89e3\u91ca\u7684\u539f\u5219\u505a\u4e8b","range":"1124-1151","style":1,"type":1}]},{"book":{"author":"\u4fdd\u7f57 R.\u5c3c\u6587 \u672c\u00b7\u62c9\u83ab\u5c14\u7279","bookId":"910544","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/544/910544/s_910544.jpg","format":"epub","soldout":0,"title":"OKR\uff1a\u6e90\u4e8e\u82f1\u7279\u5c14\u548c\u8c37\u6b4c\u7684\u76ee\u6807\u7ba1\u7406\u5229\u5668","version":1825854644},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u9a6c\u5c14\u79d1\u59c6\u00b7\u683c\u62c9\u5fb7\u5a01\u5c14","bookId":"603419","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/419/603419/s_603419.jpg","format":"epub","soldout":0,"title":"\u5f02\u7c7b\uff1a\u4e0d\u4e00\u6837\u7684\u6210\u529f\u542f\u793a\u5f55\uff08\u65b0\u7248\uff09","version":979175326},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5ed6\u4fe1\u5fe0","bookId":"709080","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/80/709080/s_709080.jpg","format":"txt","soldout":0,"title":"\u8fd9\u5c31\u662f\u53f0\u6e7e\uff0c\u8fd9\u624d\u662f\u53f0\u6e7e","version":0},"chapters":[{"bookId":"709080","chapterIdx":3,"chapterUid":12,"title":"\u65b0\u5317"}],"removed":[],"synckey":1583408587,"updated":[{"bookId":"709080","bookVersion":0,"bookmarkId":"709080_12_143-193","chapterUid":12,"createTime":1582476224,"markText":"\u65b0\u5317\u5e02\u4ee5\u524d\u53eb\u201c\u53f0\u5317\u53bf\u201d\uff0c\u56e0\u4e3a\u4eba\u53e3\u8d85\u8fc7\u76f4\u8f96\u5e02\u95e8\u69db\u800c\u76f4\u63a5\u5347\u683c\u4e3a\u76f4\u8f96\u5e02\uff0c\u4e0e\u53f0\u5317\u5e02\u867d\u7136\u53ea\u5dee\u4e86\u4e00\u4e2a\u5b57\uff0c\u662f\u201c\u53bf\u201d","range":"143-193","style":1,"type":1}]},{"book":{"author":"\u5c3c\u514b\u00b7\u9ea6\u514b\u5362\u5c14","bookId":"914808","bookStatus":1,"cover":"https://wfqqreader-1252317822.image.myqcloud.com/cover/808/914808/s_914808.jpg","format":"epub","soldout":0,"title":"TensorFlow\u673a\u5668\u5b66\u4e60\u5b9e\u6218\u6307\u5357","version":1393451940},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5361\u5c14\u00b7\u7ebd\u6ce2\u7279","bookId":"909893","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/893/909893/s_909893.jpg","format":"epub","soldout":0,"title":"\u6df1\u5ea6\u5de5\u4f5c\uff1a\u5982\u4f55\u6709\u6548\u4f7f\u7528\u6bcf\u4e00\u70b9\u8111\u529b","version":1584937328},"chapters":[{"bookId":"909893","chapterIdx":23,"chapterUid":23,"title":"\u7b2c\u4e8c\u90e8\u5206 \u51c6\u5219"},{"bookId":"909893","chapterIdx":17,"chapterUid":17,"title":"\u5bf9\u751f\u610f\u6765\u8bb2\u662f\u574f\u4e8b\uff0c\u5bf9\u4e2a\u4eba\u6765\u8bb2\u662f\u597d\u4e8b"},{"bookId":"909893","chapterIdx":15,"chapterUid":15,"title":"\u5fd9\u788c\u4ee3\u8868\u751f\u4ea7\u80fd\u529b"}],"removed":[],"synckey":1583408587,"updated":[{"bookId":"909893","bookVersion":1679695073,"bookmarkId":"909893_23_3761-3829","chapterUid":23,"createTime":1581731721,"markText":"\u57f9\u517b\u6df1\u5ea6\u5de5\u4f5c\u7684\u4e60\u60ef\uff0c\u5173\u952e\u5728\u4e8e\u8d8a\u8fc7\u826f\u597d\u7684\u610f\u56fe\uff0c\u5728\u5de5\u4f5c\u751f\u6d3b\u4e2d\u52a0\u5165\u4e00\u4e9b\u7279\u522b\u8bbe\u8ba1\u7684\u60ef\u4f8b\u548c\u56fa\u5b9a\u7a0b\u5e8f\uff0c\u4f7f\u5f97\u8fdb\u5165\u5e76\u4fdd\u6301\u9ad8\u5ea6\u4e13\u6ce8\u72b6\u6001\u6d88\u8017\u7684\u610f\u5fd7\u529b\u6700\u5c0f\u5316\u3002","range":"3761-3829","style":1,"type":1},{"bookId":"909893","bookVersion":1679695073,"bookmarkId":"909893_17_490-635","chapterUid":17,"createTime":1581730900,"markText":"\u5305\u62ec\u6df1\u5ea6\u5de5\u4f5c\u5f88\u96be\uff0c\u6d6e\u6d45\u5de5\u4f5c\u66f4\u7b80\u5355\uff1b\u5f53\u5de5\u4f5c\u4e2d\u6ca1\u6709\u660e\u786e\u76ee\u6807\u65f6\uff0c\u56f4\u7ed5\u6d6e\u6d45\u5de5\u4f5c\u7684\u8868\u9762\u5fd9\u788c\u4f1a\u6210\u4e3a\u4e00\u79cd\u672c\u80fd\uff1b\u8fd8\u6709\u5728\u6211\u4eec\u7684\u6587\u5316\u4e2d\u5df2\u7ecf\u5f62\u6210\u4e86\u4e00\u79cd\u4fe1\u5ff5\uff0c\u8ba4\u4e3a\u4e0e\u201c\u7f51\u7edc\u201d\u76f8\u5173\u7684\u884c\u4e3a\u90fd\u662f\u597d\u7684\uff0c\u4e0d\u8bba\u5176\u5bf9\u6211\u4eec\u521b\u9020\u6709\u4ef7\u503c\u4e8b\u7269\u4e4b\u80fd\u529b\u6709\u4f55\u5f71\u54cd\u3002\u7531\u4e8e\u6df1\u5ea6\u5de5\u4f5c\u4ef7\u503c\u4ee5\u53ca\u5ffd\u7565\u6df1\u5ea6\u5de5\u4f5c\u6240\u9020\u6210\u7684\u635f\u5931\u5f88\u96be\u76f4\u63a5\u8861\u91cf\uff0c\u8fd9\u4e9b\u6f6e\u6d41\u624d\u4f1a\u5927\u884c\u5176\u9053\u3002","range":"490-635","style":1,"type":1},{"bookId":"909893","bookVersion":1679695073,"bookmarkId":"909893_15_3053-3089","chapterUid":15,"createTime":1581730243,"markText":"\u77e5\u8bc6\u5de5\u4f5c\u5e76\u975e\u751f\u4ea7\u7ebf\uff0c\u4ece\u4fe1\u606f\u4e2d\u63d0\u53d6\u4ef7\u503c\u7684\u884c\u4e3a\u5f80\u5f80\u5e76\u4e0d\u5fd9\u788c\uff0c\u4e5f\u5e76\u975e\u9760\u5fd9\u788c\u652f\u6491","range":"3053-3089","style":1,"type":1}]},{"book":{"author":"\u6770\u592b\u00b7\u8428\u745f\u5170","bookId":"857339","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/339/857339/s_857339.jpg","format":"epub","soldout":0,"title":"\u654f\u6377\u9769\u547d","version":128975169},"chapters":[{"bookId":"857339","chapterIdx":11,"chapterUid":11,"title":"\u7b2c\u516b\u7ae0 \u627e\u5230\u6700\u6709\u4ef7\u503c\u768420%"}],"removed":[],"synckey":1583408587,"updated":[{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_12987-13087","chapterUid":11,"createTime":1582554351,"markText":"\u6700\u7406\u60f3\u7684\u4e00\u79cd\u5374\u662f\u5c3d\u5feb\u505a\u51fa\u6700\u6709\u4ef7\u503c\u7684\u90a320%\uff0c\u56e0\u4e3a\u8fd920%\u80fd\u591f\u4ea7\u751f80%\u7684\u4ef7\u503c\u3002\u51e0\u4e4e\u53ef\u4ee5\u80af\u5b9a\u7684\u662f\uff0c\u4f60\u5728\u7b2c\u4e00\u4e2a\u51b2\u523a\u9636\u6bb5\u5f00\u59cb\u4e4b\u524d\u6240\u505a\u7684\u5404\u79cd\u731c\u60f3\u4e0d\u662f\u6b63\u786e\u7684\uff0c\u4f46\u51b2\u523a\u5f00\u59cb\u4e4b\u524d\u7684\u90a3\u4e2a\u9636\u6bb5\uff0c\u8fdb\u884c\u5404\u79cd\u731c\u6d4b\u5374\u662f\u4f60\u6700\u597d\u7684\u9009","range":"12987-13087","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_6720-6781","chapterUid":11,"createTime":1582554305,"markText":"\u7b2c\u56db\uff0c\u4ea7\u54c1\u8d1f\u8d23\u4eba\u5fc5\u987b\u4e3a\u4ef7\u503c\u8d1f\u8d23\u3002\u5728\u5546\u4e1a\u8bed\u5883\u4e0b\uff0c\u6700\u91cd\u8981\u7684\u5c31\u662f\u6536\u76ca\u3002\u6211\u901a\u8fc7\u6bcf\u201c\u70b9\u201d\u52aa\u529b\u521b\u9020\u591a\u5c11\u6536\u76ca\u53bb\u8bc4\u4ef7\u4e00\u4f4d\u4ea7\u54c1\u8d1f\u8d23\u4eba\u7684\u4e1a\u7ee9\u3002","range":"6720-6781","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_6397-6475","chapterUid":11,"createTime":1582554296,"markText":"\u4e09\uff0c\u4ea7\u54c1\u8d1f\u8d23\u4eba\u5fc5\u987b\u6709\u8db3\u591f\u7684\u65f6\u95f4\u4e0e\u56e2\u961f\u6210\u5458\u63a5\u89e6\uff0c\u5411\u56e2\u961f\u6210\u5458\u89e3\u91ca\u6e05\u695a\u9700\u8981\u505a\u4ec0\u4e48\u4ee5\u53ca\u4e3a\u4ec0\u4e48\u8981\u8fd9\u4e48\u505a\u3002\u867d\u7136\u4ea7\u54c1\u8d1f\u8d23\u4eba\u8d1f\u8d23\u5236\u5b9a\u5f85\u529e\u4e8b\u9879\u6e05\u5355\uff0c\u4f46\u5fc5\u987b\u4e0e\u56e2\u961f\u6210\u5458\u7ecf\u5e38\u6c9f\u901a\u3002","range":"6397-6475","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_6227-6290","chapterUid":11,"createTime":1582554291,"markText":"\u7b2c\u4e8c\uff0c\u4ea7\u54c1\u8d1f\u8d23\u4eba\u5fc5\u987b\u83b7\u5f97\u81ea\u4e3b\u51b3\u7b56\u6743\u3002\u7ba1\u7406\u5c42\u4e0d\u5e94\u8be5\u5e72\u6d89\u56e2\u961f\u8fd0\u4f5c\uff0c\u4ea7\u54c1\u8d1f\u8d23\u4eba\u5e94\u8be5\u88ab\u6388\u4e88\u51b3\u7b56\u6743\uff0c\u624d\u80fd\u81ea\u884c\u51b3\u5b9a\u4ea7\u54c1\u7684\u524d\u666f\u4e0e\u5982\u4f55\u5b9e\u73b0\u524d\u666f","range":"6227-6290","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_5980-6006","chapterUid":11,"createTime":1582554285,"markText":"\u7b2c\u4e00\uff0c\u4ea7\u54c1\u8d1f\u8d23\u4eba\u9700\u8981\u5728\u76f8\u5173\u9886\u57df\u5185\u638c\u63e1\u4e30\u5bcc\u7684\u4e13\u4e1a\u77e5\u8bc6\u3002","range":"5980-6006","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_5831-5942","chapterUid":11,"createTime":1582554281,"markText":"Scrum\u4e3b\u7ba1\u4e0e\u56e2\u961f\u6210\u5458\u7684\u804c\u8d23\u662f\u786e\u4fdd\u5de5\u4f5c\u5feb\u901f\u5b8c\u6210\uff0c\u770b\u770b\u662f\u5426\u80fd\u8fdb\u4e00\u6b65\u52a0\u5feb\u901f\u5ea6\uff0c\u63d0\u9ad8\u6548\u7387\uff0c\u800c\u4ea7\u54c1\u8d1f\u8d23\u4eba\u7684\u804c\u8d23\u662f\u628a\u56e2\u961f\u7684\u6548\u7387\u8f6c\u6362\u6210\u5b9e\u5b9e\u5728\u5728\u7684\u4ef7\u503c\u3002\u4e0eScrum\u4e3b\u7ba1\u76f8\u6bd4\uff0c\u4ea7\u54c1\u8d1f\u8d23\u4eba\u4e0d\u4ec5\u9700\u8981\u5177\u5907\u66f4\u591a\u4e13\u4e1a\u77e5\u8bc6\uff0c\u8fd8\u5fc5\u987b\u5177\u5907\u4ee5\u4e0b4\u79cd\u7279\u70b9\u3002","range":"5831-5942","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_7209-7220","chapterUid":11,"createTime":1582554270,"markText":"\u89c2\u5bdf\u2014\u5bfc\u5411\u2014\u51b3\u5b9a\u2014\u884c\u52a8","range":"7209-7220","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_5760-5800","chapterUid":11,"createTime":1582554162,"markText":"\u6211\u59bb\u5b50\u662f\u6700\u597d\u7684\u4ea7\u54c1\u8d1f\u8d23\u4eba\uff0c\u5979\u51c6\u786e\u5730\u77e5\u9053\u81ea\u5df1\u60f3\u8981\u4ec0\u4e48\uff0c\u6211\u53ea\u8981\u8d1f\u8d23\u6267\u884c\u5979\u7684\u51b3\u5b9a\u5c31\u884c\u4e86","range":"5760-5800","style":1,"type":1},{"bookId":"857339","bookVersion":128975169,"bookmarkId":"857339_11_4798-4883","chapterUid":11,"createTime":1582553998,"markText":"\u4e00\u4e2a\u4eba\u7684\u9886\u5bfc\u804c\u8d23\u4e0d\u53d6\u51b3\u4e8e\u6743\u529b\u2026\u2026\u201c\u6743\u529b\u7b49\u540c\u4e8e\u804c\u8d23\u201d\u8fd9\u79cd\u6839\u6df1\u8482\u56fa\u7684\u8bef\u89e3\u5bfc\u81f4\u5f88\u591a\u7ec4\u7ec7\u51fa\u73b0\u4e86\u95ee\u9898\u3002\u6211\u76f8\u4fe1\u5173\u4e8e\u8fd9\u4e00\u70b9\u7684\u8bef\u89e3\u975e\u5e38\u666e\u904d\uff0c\u5b83\u6df1\u6df1\u5730\u6839\u690d\u4e8e\u6211\u4eec\u7684\u610f\u8bc6\uff0c\u751a\u81f3\u6211\u4eec\u90fd\u6ca1\u6709\u610f\u8bc6\u5230","range":"4798-4883","style":1,"type":1}]},{"book":{"author":"\u54c8\u91cc\u00b7\u6d1b\u62c9\u5c3c","bookId":"847197","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/197/847197/s_847197.jpg","format":"epub","soldout":0,"title":"\u54c8\u4f5b\u8bb0\u5fc6\u8bfe\uff1a\u8fc7\u76ee\u4e0d\u5fd8\u7684\u8bb0\u5fc6\u6cd5","version":2079303914},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u535a\u514b","bookId":"799191","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/191/799191/s_799191.jpg","format":"epub","soldout":0,"title":"\u91cd\u65b0\u5b9a\u4e49\u56e2\u961f\uff1a\u8c37\u6b4c\u5982\u4f55\u5de5\u4f5c","version":454566346},"chapters":[{"bookId":"799191","chapterIdx":6,"chapterUid":6,"title":"\u7b2c\u4e00\u7ae0 \u6210\u4e3a\u4e00\u540d\u521b\u59cb\u4eba"},{"bookId":"799191","chapterIdx":5,"chapterUid":5,"title":"\u524d\u8a00 \u4e3a\u4ec0\u4e48\u8c37\u6b4c\u7684\u539f\u5219\u4e5f\u5bf9\u4f60\u9002\u7528"},{"bookId":"799191","chapterIdx":4,"chapterUid":4,"title":"\u81ea\u5e8f"}],"removed":[],"synckey":1583408587,"updated":[{"bookId":"799191","bookVersion":454566346,"bookmarkId":"799191_6_811-1200","chapterUid":6,"createTime":1582820542,"markText":"\u6258\u9a6c\u65af\u00b7\u963f\u5c14\u74e6\u00b7\u7231\u8fea\u751f\u4e8e1876\u5e74\uff0c\u4ed6\u5728\u65b0\u6cfd\u897f\u95e8\u6d1b\u5e15\u514b\u5f00\u4e86\u4e00\u95f4\u5b9e\u9a8c\u5ba4\u3002\u4ed6\u5e26\u9886\u4e00\u540d\u7f8e\u56fd\u6570\u5b66\u5bb6\u3001\u4e00\u540d\u82f1\u56fd\u673a\u68b0\u5e08\u3001\u4e00\u540d\u5fb7\u56fd\u5439\u73bb\u7483\u5de5\u548c\u4e00\u540d\u745e\u58eb\u949f\u8868\u5320\uff0c\u4e00\u8d77\u7814\u5236\u51fa\u4e00\u79cd\u767d\u70bd\u706f\u706f\u6ce1\uff0c\u53ef\u4ee5\u8fde\u7eed\u7167\u660e\u8d85\u8fc713\u4e2a\u5c0f\u65f6\uff0c\ufffc\u4e3a\u7231\u8fea\u751f\u901a\u7528\u7535\u6c14\u516c\u53f8\u7684\u6210\u7acb\u5960\u5b9a\u4e86\u57fa\u7840\u3002","range":"811-1200","style":1,"type":1},{"bookId":"799191","bookVersion":454566346,"bookmarkId":"799191_6_7398-7706","chapterUid":6,"createTime":1581936688,"markText":"\u5728\u5de5\u4f5c\u4e2d\u7aed\u5c3d\u6240\u80fd\u7684\u5de5\u4eba\u662f\u6700\u96be\u5f97\u7684\u3002\u5982\u679c\u5f97\u4e0d\u5230\u5e94\u6709\u7684\u8ba4\u53ef\uff0c\u5c31\u4e0d\u80fd\u5bc4\u5e0c\u671b\u4e8e\u4ed6\u4eec\u6beb\u65e0\u4fdd\u7559\u5730\u5949\u732e\u2026\u2026\u5982\u679c\u4e00\u4e2a\u4eba\u611f\u89c9\u65e5\u95f4\u7684\u5de5\u4f5c\u4e0d\u4ec5\u4fdd\u8bc1\u4e86\u4ed6\u7684\u57fa\u672c\u9700\u6c42\uff0c\u800c\u4e14\u4e3a\u4ed6\u63d0\u4f9b\u4e86\u4e9b\u8bb8\u6170\u85c9\uff0c\u4f7f\u4ed6\u4eec\u80fd\u591f\u4e3a\u513f\u5973\u521b\u9020\u4e00\u4e9b\u673a\u4f1a\uff0c\u4e3a\u59bb\u5b50\u7684\u751f\u6d3b\u589e\u6dfb\u4e00\u4efd\u6109\u60a6\uff0c\u90a3\u4e48\u4ed6\u5c31\u4f1a\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4efd\u4f53\u9762\u7684\u5de5\u4f5c\uff0c\u5c31\u4f1a\u653e\u4e0b\u6240\u6709\u5305\u88b1\uff0c\u5c3d\u529b\u5de5\u4f5c\u3002\u65e0\u6cd5\u4ece\u65e5\u95f4\u5de5\u4f5c\u4e2d\u5f97\u5230\u4e00\u5b9a\u6ee1\u8db3\u611f\u7684\u4eba\uff0c\u5c31\u5931\u53bb\u4e86\u85aa\u916c\u4e2d\u6700\u597d\u7684\u4e00\u90e8\u5206\u3002","range":"7398-7706","style":1,"type":1},{"bookId":"799191","bookVersion":454566346,"bookmarkId":"799191_6_6546-6655","chapterUid":6,"createTime":1581936630,"markText":"\u6211\u4eec\u7684\u5458\u5de5\u81ea\u79f0\u8c37\u6b4c\u4eba\uff0c\u662f\u6211\u4eec\u516c\u53f8\u7684\u6839\u672c\u3002\u8c37\u6b4c\u662f\u56f4\u7ed5\u7740\u5438\u5f15\u548c\u53d1\u6325\u51fa\u4f17\u7684\u6280\u672f\u4e13\u5bb6\u548c\u5546\u52a1\u4eba\u58eb\u7684\u80fd\u529b\u800c\u6253\u9020\u7684\u3002\u6211\u4eec\u6709\u5e78\u62db\u52df\u4e86\u5f88\u591a\u5177\u6709\u521b\u9020\u6027\u3001\u6709\u64cd\u5b88\u548c\u4e0d\u8f9e\u52b3\u82e6\u7684\u5de5\u4f5c\u660e\u661f\u3002\u6211\u4eec\u5e0c\u671b\u672a\u6765\u80fd\u62db\u52df\u66f4\u591a\u8fd9\u6837\u7684\u4eba\u3002\u6211\u4eec\u4f1a\u5956\u52b1\u4ed6\u4eec\uff0c\u5bf9\u4ed6\u4eec\u597d\u3002","range":"6546-6655","style":1,"type":1},{"bookId":"799191","bookVersion":454566346,"bookmarkId":"799191_5_5802-5843","chapterUid":5,"createTime":1581935827,"markText":"\u7ba1\u7406\u7684\u6838\u5fc3\u89d2\u5ea6\u6765\u8bb2\uff0c\u6743\u529b\u7684\u52a8\u6001\u65b9\u5411\u6070\u4e0e\u81ea\u7531\u80cc\u9053\u800c\u9a70\u3002\u5458\u5de5\u8981\u4f9d\u9760\u7ba1\u7406\u8005\uff0c\u5e0c\u671b\u53d6\u60a6\u4ed6\u4eec","range":"5802-5843","style":1,"type":1},{"bookId":"799191","bookVersion":454566346,"bookmarkId":"799191_4_4818-4856","chapterUid":4,"createTime":1581934851,"markText":"\u56e0\u4e3a\u81ea\u7531\u7684\u72b6\u6001\u662f\u4ee5\u81ea\u7531\u8868\u8fbe\u4e3a\u57fa\u7840\u7684\uff0c\u800c\u81ea\u7531\u8868\u8fbe\u53c8\u4f9d\u9760\u5bf9\u4fe1\u606f\u548c\u771f\u5b9e\u60c5\u51b5\u7684\u4e86\u89e3\u3002","range":"4818-4856","style":1,"type":1},{"bookId":"799191","bookVersion":454566346,"bookmarkId":"799191_4_1364-1647","chapterUid":4,"createTime":1581934554,"markText":"\u6211\u53ea\u662f\u60f3\u4e0d\u901a\uff0c\u4e0d\u7ba1\u6211\u8d70\u5230\u54ea\u91cc\uff0c\u96c7\u5458\u90fd\u96be\u4ee5\u5f97\u5230\u5584\u5f85\u3002\u4eba\u7684\u4e00\u751f\u7528\u5728\u5de5\u4f5c\u4e0a\u7684\u65f6\u95f4\u662f\u6700\u591a\u7684\u3002\ufffc\u5de5\u4f5c\u7684\u7ecf\u5386\u2014\u2014\u751a\u81f3\u4e3a\u6700\u597d\u7684\u4e00\u4e9b\u96c7\u4e3b\u5de5\u4f5c\u2014\u2014\u4ee4\u4eba\u52a8\u529b\u5c3d\u5931\u3001\u4e22\u6389\u672c\u6027\uff0c\u8fd9\u6837\u662f\u4e0d\u5bf9\u7684\u3002","range":"1364-1647","style":1,"type":1}]},{"book":{"author":"\u90ed\u5fd7\u4eae","bookId":"925637","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/637/925637/s_925637.jpg","format":"epub","soldout":0,"title":"\u903b\u8f91\u601d\u7ef4\uff1a\u806a\u660e\u4eba\u662f\u5982\u4f55\u601d\u8003\u7684","version":376338072},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5ed6\u4fe1\u5fe0","bookId":"623405","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/405/623405/s_623405.jpg","format":"epub","soldout":0,"title":"\u6211\u4eec\u53f0\u6e7e\u8fd9\u4e9b\u5e74\u2161","version":1483956008},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u82cf\u73ca\u00b7\u6851\u5854\u683c","bookId":"23796300","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/300/23796300/s_23796300.jpg","format":"epub","soldout":0,"title":"\u75be\u75c5\u7684\u9690\u55bb\uff082018\u5e74\u7248\uff09","version":126774701},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u7231\u5fb7\u534e\u00b7\u65af\u8bfa\u767b","bookId":"26859484","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/484/26859484/s_26859484.jpg","format":"epub","soldout":0,"title":"\u6c38\u4e45\u8bb0\u5f55","version":590215864},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u8fd1\u85e4\u5927\u4ecb","bookId":"515655","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/655/515655/s_515655.jpg","format":"epub","soldout":0,"title":"\u4e2d\u56fd\u7f3a\u4ec0\u4e48\uff0c\u65e5\u672c\u7f3a\u4ec0\u4e48","version":1015253150},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u6f58\u7ee5\u94ed \u9ec4\u76c8\u76c8","bookId":"920473","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/473/920473/s_920473.jpg","format":"epub","soldout":0,"title":"\u6027\u4e4b\u53d8\uff1a21\u4e16\u7eaa\u4e2d\u56fd\u4eba\u7684\u6027\u751f\u6d3b","version":803397845},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u6e21\u8fb9\u5eb7\u5f18","bookId":"921494","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/494/921494/s_921494.jpg","format":"epub","soldout":0,"title":"\u9ad8\u6548\u9605\u8bfb","version":79437235},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"W.\u5927\u536b\u00b7\u9a6c\u514b\u65af","bookId":"25858734","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/734/25858734/s_25858734.jpg","format":"epub","soldout":0,"title":"\u539f\u5bbf\u725b\u4ed4\uff1a\u65e5\u672c\u8857\u5934\u65f6\u5c1a\u4e94\u5341\u5e74","version":495175957},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5510\u7eb3\u5fb7\u00b7J\u00b7\u7279\u6717\u666e \u6885\u96f7\u8fea\u601d\u00b7\u9ea6\u57fa\u5f17","bookId":"848414","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/414/848414/s_848414.jpg","format":"epub","soldout":0,"title":"\u7279\u6717\u666e\u7684\u6210\u529f\u4e4b\u9053\uff1a\u7279\u6717\u666e\u6210\u529f\u5b66\u7b2c\u4e00\u8bfe","version":674536819},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5e15\u7279\u91cc\u514b\u00b7\u5170\u897f\u5965\u5c3c","bookId":"920976","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/976/920976/s_920976.jpg","format":"epub","soldout":0,"title":"\u56e2\u961f\u534f\u4f5c\u7684\u4e94\u5927\u969c\u788d\uff08\u5341\u5e74\u5178\u85cf\u7248\uff09","version":893866202},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u8a79\u59c6\u65af\u00b7E.\u745e\u5b89","bookId":"24987068","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/68/24987068/s_24987068.jpg","format":"epub","soldout":0,"title":"\u5173\u952e\u63d0\u95ee","version":1258743172},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5854\u838e\u00b7\u6b27\u91cc\u5e0c","bookId":"24275945","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/945/24275945/s_24275945.jpg","format":"epub","soldout":0,"title":"\u771f\u76f8\u4e0e\u9519\u89c9","version":1348739124},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u9053\u683c\u62c9\u65af\u00b7\u4e9a\u5f53\u65af","bookId":"24147392","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/392/24147392/s_24147392.jpg","format":"epub","soldout":0,"title":"\u94f6\u6cb3\u7cfb\u642d\u8f66\u5ba2\u6307\u5357","version":170821198},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u7f57\u4f2f\u7279\u00b7\u6e05\u5d0e \u838e\u4f26\u00b7\u83b1\u5e0c\u7279","bookId":"786063","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/63/786063/s_786063.jpg","format":"epub","soldout":0,"title":"\u5bcc\u7238\u7238\u8d22\u52a1\u81ea\u7531\u4e4b\u8def","version":1049021760},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5085\u9ad8\u4e49","bookId":"674048","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/48/674048/s_674048.jpg","format":"epub","soldout":0,"title":"\u9093\u5c0f\u5e73\u65f6\u4ee3","version":1782542612},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u53f2\u8482\u82ac\u00b7\u970d\u91d1 \u8bb8\u660e\u8d24","bookId":"757874","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/874/757874/s_757874.jpg","format":"epub","soldout":0,"title":"\u65f6\u95f4\u7b80\u53f2\uff08\u63d2\u56fe\u672c\uff09","version":1784900944},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u738b\u8d5b","bookId":"929747","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/747/929747/s_929747.jpg","format":"epub","soldout":0,"title":"\u9996\u5e2d\u589e\u957f\u5b98\uff1a\u4eceCMO\u5230CGO","version":324701150},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u4e39\u5c3c\u5c14\u00b7\u5361\u5c3c\u66fc","bookId":"573975","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/975/573975/s_573975.jpg","format":"epub","soldout":0,"title":"\u601d\u8003\uff0c\u5feb\u4e0e\u6162","version":1771979418},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u8482\u5c14 \u9a6c\u65af\u7279\u65af","bookId":"566431","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/431/566431/s_566431.jpg","format":"epub","soldout":0,"title":"\u4ece0\u52301\uff1a\u5f00\u542f\u5546\u4e1a\u4e0e\u672a\u6765\u7684\u79d8\u5bc6","version":350741114},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u672c\u00b7\u970d\u6d1b\u7ef4\u8328","bookId":"629864","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/864/629864/s_629864.jpg","format":"epub","soldout":0,"title":"\u521b\u4e1a\u7ef4\u8270\uff1a\u5982\u4f55\u5b8c\u6210\u6bd4\u96be\u66f4\u96be\u7684\u4e8b","version":1726676633},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u6c83\u5c14\u7279\u00b7\u827e\u8428\u514b\u68ee","bookId":"635722","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/722/635722/s_635722.jpg","format":"epub","soldout":0,"title":"\u53f2\u8482\u592b\u00b7\u4e54\u5e03\u65af\u4f20\uff082014\u4fee\u8ba2\u7248\uff09","version":2067164839},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u9c8d\u65af\u7ef4\u5c14\uff08Boswell","bookId":"603197","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/197/603197/s_603197.jpg","format":"epub","soldout":0,"title":"\u7f16\u5199\u53ef\u8bfb\u4ee3\u7801\u7684\u827a\u672f","version":1825050530},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5f20\u9896 \u8d56\u52c7\u6d69","bookId":"621966","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/966/621966/s_621966.jpg","format":"epub","soldout":0,"title":"\u7f16\u5199\u9ad8\u8d28\u91cf\u4ee3\u7801\uff1a\u6539\u5584Python\u7a0b\u5e8f\u768491\u4e2a\u5efa\u8bae","version":1818808703},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5218\u98de","bookId":"914296","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/296/914296/s_914296.jpg","format":"epub","soldout":0,"title":"\u4ece\u70b9\u5b50\u5230\u4ea7\u54c1\uff1a\u4ea7\u54c1\u7ecf\u7406\u7684\u4ef7\u503c\u89c2\u4e0e\u65b9\u6cd5\u8bba","version":1252616748},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"Lydia","bookId":"852459","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/459/852459/s_852459.jpg","format":"epub","soldout":0,"title":"\u5168\u6808\u5e02\u573a\u4eba\uff1a\u4e92\u8054\u7f51\u5e02\u573a\u8425\u9500\u5165\u95e8\u901a\u7528\u5b9d\u5178","version":1015868064},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u9ec4\u6709\u74a8","bookId":"850893","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/893/850893/s_850893.jpg","format":"epub","soldout":0,"title":"\u8fd0\u8425\u4e4b\u5149\uff1a\u6211\u7684\u4e92\u8054\u7f51\u8fd0\u8425\u65b9\u6cd5\u8bba\u4e0e\u81ea\u767d","version":1382259823},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u745e\u00b7\u8499\u514b","bookId":"932993","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/993/932993/s_932993.jpg","format":"epub","soldout":0,"title":"\u7ef4\u7279\u6839\u65af\u5766\u4f20\uff1a\u5929\u624d\u4e4b\u4e3a\u8d23\u4efb","version":1944858972},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u5ed6\u4fe1\u5fe0","bookId":"130343","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/343/130343/s_130343.jpg","format":"epub","soldout":0,"title":"\u6211\u4eec\u53f0\u6e7e\u8fd9\u4e9b\u5e74\u2160","version":2105622828},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u674e\u7b11\u6765","bookId":"654445","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/445/654445/s_654445.jpg","format":"epub","soldout":1,"title":"\u628a\u65f6\u95f4\u5f53\u4f5c\u670b\u53cb","version":945429774},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u8d3e\u771f","bookId":"859634","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/634/859634/s_859634.jpg","format":"epub","soldout":0,"title":"\u6dd8\u5b9d\u5929\u732b\u5e97\u662f\u5982\u4f55\u8fd0\u8425\u7684\uff1a\u7f51\u5e97\u4ece0\u5230\u5343\u4e07\u5b9e\u64cd\u624b\u518c","version":603925139},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u9648\u4e2d","bookId":"684856","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/856/684856/s_684856.jpg","format":"epub","soldout":1,"title":"\u590d\u76d8\uff1a\u5bf9\u8fc7\u53bb\u7684\u4e8b\u60c5\u505a\u601d\u7ef4\u6f14\u7ec3","version":930720781},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u827e\u529b","bookId":"681628","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/628/681628/s_681628.jpg","format":"epub","soldout":0,"title":"\u4f60\u4e00\u5e74\u76848760\u5c0f\u65f6","version":435923648},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u9ad8\u5fb7","bookId":"635373","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/373/635373/s_635373.jpg","format":"txt","soldout":0,"title":"\u6d17\u8111\u672f2\uff1a\u600e\u6837\u6709\u903b\u8f91\u5730\u8bf4\u670d\u4ed6\u4eba","version":0},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u67e5\u5c14\u65af\u00b7\u90fd\u5e0c\u683c","bookId":"635922","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/922/635922/s_635922.jpg","format":"epub","soldout":0,"title":"\u4e60\u60ef\u7684\u529b\u91cf\uff08\u65b0\u7248\uff09","version":1788697433},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u7f57\u632f\u5b87","bookId":"567322","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/322/567322/s_567322.jpg","format":"epub","soldout":0,"title":"\u7f57\u8f91\u601d\u7ef4\uff1a\u6210\u5927\u4e8b\u8005\u4e0d\u7ea0\u7ed3","version":620222752},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]},{"book":{"author":"\u827e\u8428\u514b\u00b7\u963f\u897f\u83ab\u592b","bookId":"538131","bookStatus":1,"cover":"https://rescdn.qqmail.com/weread/cover/131/538131/s_538131.jpg","format":"txt","soldout":0,"title":"\u94f6\u6cb3\u5e1d\u56fd\uff1a\u57fa\u5730","version":0},"chapters":[],"removed":[],"synckey":1583408587,"updated":[]}]'), 
    function(slackName, i) {
      return String(slackName).padStart(i, "0");
    });
    /** @type {boolean} */
    var sandbox = true;
    /** @type {boolean} */
    sandbox = false;
    var RedBox = function(e) {
      /**
       * @param {?} rt
       * @return {?}
       */
      function t(rt) {
        var self;
        return Object(pkg.a)(this, t), (self = Object(e.a)(this, Object(schema.a)(t).call(this, rt))).state = {
          notes : [],
          selNote : null,
          evernote : null,
          evernoteToken : null,
          syncStatus : "done",
          noteStoreUrl : null,
          is_vip : false
        }, self._sync = self._sync.bind(Object(options.a)(self)), self._export_enml = self._export_enml.bind(Object(options.a)(self)), self._export_txt = self._export_txt.bind(Object(options.a)(self)), self._export_md = self._export_md.bind(Object(options.a)(self)), self;
      }
      return Object(data.a)(t, e), Object(self.a)(t, [{
        key : "componentDidMount",
        value : function() {
          var router = this;
          chrome.storage.local.get(["notes", "evernoteToken", "userInfo"], function(that) {
            var notes = that.notes.filter(function(weather) {
              return weather.updated.length > 0;
            });
            var url = (that.evernoteToken, that.userInfo && that.userInfo.vid);
            notes = function(elements) {
              /** @type {number} */
              var i = 0;
              for (; i < elements.length; i++) {
                elements[i] = update(elements[i]);
              }
              return elements;
            }(notes);
            router.setState({
              notes : notes,
              selNote : notes.length > 0 ? notes[0] : null
            }, function() {
              if (router.state.evernoteToken) {
                var authenticationClient = (new Node({
                  sandbox : sandbox,
                  china : true,
                  token : router.state.evernoteToken
                })).getUserStore();
                authenticationClient.getUser(router.state.evernoteToken, function(worddata, contextReference) {
                  if (worddata) {
                    console.log("**err**", worddata);
                  } else {
                    console.log("**evernote**", contextReference);
                    router.setState({
                      evernote : contextReference
                    });
                  }
                });
                authenticationClient.getUserUrls(router.state.evernoteToken, function(canCreateDiscussions, args) {
                  if (!canCreateDiscussions) {
                    console.log("*urls*", args);
                    router.setState({
                      noteStoreUrl : args.noteStoreUrl
                    });
                  }
                });
              }
            });
            fetch("https://weread.qnmlgb.tech/iamvip?vid=".concat(url)).then(function(rawResp) {
              return rawResp.json();
            }).then(function(site) {
              if (site.is_vip) {
                router.setState({
                  is_vip : true
                });
              }
            });
          });
        }
      }, {
        key : "_sync_notes",
        value : function(fields, self, data) {
          var _this2 = this;
          self.findNotesMetadata(_this2.state.evernoteToken, {
            notebookGuid : data
          }, 0, 1E3, {
            includeTitle : true,
            includeAttributes : true
          }, function(i, dbs) {
            if (!i) {
              console.log("**notes**", dbs.notes);
              var sources = {};
              dbs.notes.forEach(function(data) {
                if (data.attributes && data.attributes.source && data.guid) {
                  sources[data.attributes.source] = data.guid;
                }
              });
              fields.forEach(function(results) {
                if (results.book.bookId && !sources[results.book.bookId]) {
                  /** @type {string} */
                  var html = '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">\n<en-note>\n'.concat(results.html, "\n</en-note>");
                  var note = {};
                  note.title = results.book.title;
                  /** @type {string} */
                  note.content = html;
                  note.notebookGuid = data;
                  note.attributes = {
                    author : "weread_helper",
                    source : results.book.bookId
                  };
                  self.createNote(_this2.state.evernoteToken, note, function(canCreateDiscussions, contextReference) {
                    console.log("**create note**", contextReference);
                  });
                } else {
                  if (results.book.bookId && sources[results.book.bookId]) {
                    /** @type {string} */
                    var html = '<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">\n<en-note>\n'.concat(results.html, "\n</en-note>");
                    var note = {};
                    note.guid = sources[results.book.bookId];
                    note.title = results.book.title;
                    /** @type {string} */
                    note.content = html;
                    note.notebookGuid = data;
                    note.attributes = {
                      author : "weread_helper",
                      source : results.book.bookId
                    };
                    self.updateNote(_this2.state.evernoteToken, note, function(canCreateDiscussions, contextReference) {
                      console.log("**update note**", contextReference);
                    });
                  }
                }
              });
              setTimeout(function() {
                _this2.setState({
                  syncStatus : "success"
                }, function() {
                  setTimeout(function() {
                    _this2.setState({
                      syncStatus : "done"
                    });
                  }, 2E3);
                });
              }, 3E3);
            }
          });
        }
      }, {
        key : "_export_txt",
        value : function() {
          this.state.notes.forEach(function(results) {
            var result = next(results);
            /** @type {string} */
            var content = "".concat(results.book.title, "\n").concat(results.book.author, "\n\n");
            result.notes.forEach(function(foundJobs1) {
              content = content + "\n\u25c6 ".concat(foundJobs1[1].title, "\n\n");
              foundJobs1[1].texts.forEach(function(obj) {
                content = content + ">> ".concat(obj, "\n\n");
              });
            });
            /** @type {!Blob} */
            var moduleBlob = new Blob([content], {
              type : "text/txt;charset=utf-8"
            });
            Object(libs.saveAs)(moduleBlob, "".concat(results.book.title, ".txt"));
          });
        }
      }, {
        key : "_export_md",
        value : function() {
          var res = this;
          chrome.storage.local.get(["userInfo"], function(req) {
            var url = req.userInfo && req.userInfo.vid;
            if (url) {
              fetch("https://weread.qnmlgb.tech/iamvip?vid=".concat(url)).then(function(rawResp) {
                return rawResp.json();
              }).then(function(site) {
                if (site.is_vip) {
                  res.state.notes.forEach(function(results) {
                    var result = next(results);
                    /** @type {string} */
                    var content = "## ".concat(results.book.title, "\n\n> **").concat(results.book.author, "**\n\n");
                    result.notes.forEach(function(foundJobs1) {
                      content = content + "\n#### ".concat(foundJobs1[1].title, "\n\n");
                      foundJobs1[1].texts.forEach(function(obj) {
                        content = content + "- ".concat(obj, "\n\n");
                      });
                    });
                    /** @type {!Blob} */
                    var moduleBlob = new Blob([content], {
                      type : "text/txt;charset=utf-8"
                    });
                    Object(libs.saveAs)(moduleBlob, "".concat(results.book.title, ".md"));
                  });
                }
              });
            }
          });
        }
      }, {
        key : "_export_enml",
        value : function() {
          var res = this;
          chrome.storage.local.get(["userInfo"], function(req) {
            var url = req.userInfo && req.userInfo.vid;
            if (url) {
              fetch("https://weread.qnmlgb.tech/iamvip?vid=".concat(url)).then(function(rawResp) {
                return rawResp.json();
              }).then(function(site) {
                if (site.is_vip) {
                  /** @type {string} */
                  var json = '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE en-export SYSTEM "http://xml.evernote.com/pub/evernote-export3.dtd"><en-export export-date="'.concat(format(f()), '" application="Evernote" version="Evernote Mac">');
                  res.state.notes.forEach(function(data) {
                    /** @type {string} */
                    var body = '<![CDATA[<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE en-note SYSTEM "http://xml.evernote.com/pub/enml2.dtd">';
                    /** @type {string} */
                    body = body + "<en-note>".concat(function(data) {
                      /** @type {!Array} */
                      var stops = [];
                      var cache = {};
                      /** @type {number} */
                      var i = 0;
                      for (; i < data.chapters.length; i++) {
                        cache[data.chapters[i].chapterUid] = {
                          title : data.chapters[i].title,
                          texts : []
                        };
                      }
                      var m = data.updated;
                      m.sort(function(e, t) {
                        return parseInt(e.range.split("-")[0]) - parseInt(t.range.split("-")[0]);
                      });
                      /** @type {number} */
                      var k = 0;
                      for (; k < m.length; k++) {
                        cache[data.updated[k].chapterUid].texts.push(m[k].markText);
                      }
                      (stops = Object.keys(cache).map(function(colorSpace) {
                        return [colorSpace, cache[colorSpace]];
                      })).sort(function(subtractor, subtractee) {
                        return subtractor[0] - subtractee[0];
                      });
                      /** @type {string} */
                      var value = "<div><h1>".concat(data.book.title, '</h1><h5 style="font-size: 14px;">').concat(data.book.author, "</h5><hr />");
                      return stops.forEach(function(foundJobs1) {
                        value = value + '<div style="margin-bottom: 30px;"><p style="font-weight: bold; font-size: 16px;">'.concat(foundJobs1[1].title, "</p>");
                        foundJobs1[1].texts.forEach(function(ch) {
                          value = value + '<p style="margin-left: 40px; margin-top: 18px; font-size: 14px;">'.concat(ch, "</p>");
                        });
                        /** @type {string} */
                        value = value + "</div>";
                      }), value = value + "</div>", data.html = value, value;
                    }(data), "</en-note>]]\x3e");
                    /** @type {string} */
                    var elem = "\n              <note>\n                <title>".concat(data.book.title, "</title>\n                <content>").concat(body, "</content>\n                <created>").concat(format(f()), "</created>\n                <updated>").concat(format(f()), "</updated>\n                <note-attributes>\n                  <author>weread_helper</author>\n                  <source>").concat(data.book.bookId, "</source>\n                  <reminder-order>0</reminder-order>\n                </note-attributes>\n              </note>\n              ");
                    json = json + elem;
                  });
                  json = json + "</en-export>";
                  /** @type {!Blob} */
                  var moduleBlob = new Blob([json], {
                    type : "text/xml;charset=utf-8"
                  });
                  Object(libs.saveAs)(moduleBlob, "\u5fae\u4fe1\u8bfb\u4e66\u7b14\u8bb0_".concat(function(mtime) {
                    /** @type {!Date} */
                    var d = new Date(1E3 * mtime);
                    /** @type {number} */
                    var yyyy = d.getFullYear();
                    var testMiddlewares = require(d.getMonth() + 1, 2);
                    var gmapsSpecs = require(d.getDate(), 2);
                    var a = require(d.getHours(), 2);
                    var typeAst = require(d.getMinutes(), 2);
                    var defaultSuggestions = require(d.getSeconds(), 2);
                    return "".concat(yyyy).concat(testMiddlewares).concat(gmapsSpecs).concat(a).concat(typeAst).concat(defaultSuggestions);
                  }(f()), ".enex"));
                }
              });
            }
          });
        }
      }, {
        key : "_sync",
        value : function() {
          if (0 != this.state.notes.length && "done" == this.state.syncStatus) {
            var self = this;
            var authenticationToken = this.state.evernoteToken;
            if (authenticationToken && this.state.noteStoreUrl) {
              this.setState({
                syncStatus : "ing"
              });
              var scope = (new Node({
                sandbox : sandbox,
                china : true,
                token : authenticationToken
              })).getNoteStore(this.state.noteStoreUrl);
              scope.listNotebooks(authenticationToken, function(contextReference, mUniformsToAdd) {
                if (console.log("**notebooks**", contextReference, mUniformsToAdd), !contextReference) {
                  /** @type {boolean} */
                  var s = false;
                  /** @type {null} */
                  var result = null;
                  mUniformsToAdd.forEach(function(track) {
                    console.log("**notebook**", track.name);
                    if ("\u5fae\u4fe1\u8bfb\u4e66\u7b14\u8bb0" == track.name) {
                      /** @type {boolean} */
                      s = true;
                      /** @type {!Object} */
                      result = track;
                    }
                  });
                  if (s) {
                    self._sync_notes(self.state.notes, scope, result.guid);
                  } else {
                    scope.createNotebook(authenticationToken, {
                      name : "\u5fae\u4fe1\u8bfb\u4e66\u7b14\u8bb0"
                    }, function(canCreateDiscussions, spec) {
                      if (!canCreateDiscussions) {
                        console.log("**create notebook**", spec);
                        self._sync_notes(self.state.notes, scope, spec.guid);
                      }
                    });
                  }
                }
              });
            }
          }
        }
      }, {
        key : "render",
        value : function() {
          var self = this;
          var data = this.state.selNote;
          var cache = {};
          /** @type {!Array} */
          var stops = [];
          if (data) {
            window.scrollTo(0, 0);
            /** @type {number} */
            var i = 0;
            for (; i < data.chapters.length; i++) {
              cache[data.chapters[i].chapterUid] = {
                title : data.chapters[i].title,
                texts : []
              };
            }
            var m = data.updated;
            m.sort(function(e, t) {
              return parseInt(e.range.split("-")[0]) - parseInt(t.range.split("-")[0]);
            });
            /** @type {number} */
            var k = 0;
            for (; k < m.length; k++) {
              cache[data.updated[k].chapterUid].texts.push(m[k].markText);
            }
            (stops = Object.keys(cache).map(function(colorSpace) {
              return [colorSpace, cache[colorSpace]];
            })).sort(function(subtractor, subtractee) {
              return subtractor[0] - subtractee[0];
            });
          }
          /** @type {string} */
          var rightText = "";
          return "done" == this.state.syncStatus ? rightText = "" : "ing" == this.state.syncStatus ? rightText = "\u6b63\u5728\u540c\u6b65..." : "error" == this.state.syncStatus ? rightText = "\u540c\u6b65\u5931\u8d25" : "success" == this.state.syncStatus && (rightText = "\u540c\u6b65\u6210\u529f"), global.a.createElement("div", {
            className : "container"
          }, global.a.createElement("header", {
            className : "App-header"
          }), global.a.createElement("div", {
            style : {
              display : "flex",
              flexDirection : "row"
            }
          }, global.a.createElement("div", null, global.a.createElement("aside", {
            className : "menu",
            style : {
              position : "fixed",
              width : "260px",
              overflowY : "scroll",
              height : "100vh",
              borderRight : "1px solid #e4e4e4",
              flex : 1
            }
          }, global.a.createElement("p", {
            className : "menu-label"
          }, "\u56fe\u4e66  ", this.state.notes.length), global.a.createElement("ul", {
            className : "menu-list"
          }, this.state.notes.map(function(a, rhythm) {
            return global.a.createElement("li", {
              className : "active"
            }, global.a.createElement("a", {
              onClick : function($notyfy) {
                self.setState({
                  selNote : self.state.notes[rhythm]
                });
              }
            }, a.book.title));
          })))), global.a.createElement("div", {
            style : {
              marginLeft : "260px"
            }
          }, data && global.a.createElement("div", {
            style : {
              marginTop : "40px",
              padding : "0 10px"
            }
          }, global.a.createElement("h1", {
            className : "title"
          }, data.book.title), global.a.createElement("h5", {
            className : "title is-5"
          }, data.book.author), global.a.createElement("hr", null), stops.length > 0 && stops.map(function(foundJobs1, canCreateDiscussions) {
            return global.a.createElement("div", {
              style : {
                marginBottom : "30px"
              }
            }, global.a.createElement("p", {
              className : "subtitle is-5 is-spaced",
              style : {
                fontWeight : "bold"
              }
            }, foundJobs1[1].title), foundJobs1[1].texts.map(function(questionSets, canCreateDiscussions) {
              return global.a.createElement("p", {
                className : "subtitle is-5",
                style : {
                  marginLeft : "40px"
                }
              }, questionSets);
            }));
          })), !data && global.a.createElement("div", {
            style : {
              marginTop : "40px"
            }
          }, "\ud83d\udcd2 \u8fd8\u6ca1\u6709\u7b14\u8bb0"))), global.a.createElement("div", {
            style : {
              position : "fixed",
              top : "10px",
              right : "10px",
              display : "flex",
              flexDirection : "row",
              fontSize : "14px",
              alignItems : "center"
            }
          }, global.a.createElement("div", {
            style : {
              display : "flex",
              flexDirection : "row",
              alignItems : "center"
            }
          }, global.a.createElement("div", {
            className : "dropdown is-hoverable is-right"
          }, global.a.createElement("div", {
            className : "dropdown-trigger"
          }, global.a.createElement("button", {
            className : "button is-white",
            "aria-haspopup" : "true",
            "aria-controls" : "dropdown-menu4"
          }, global.a.createElement("span", null, "\u26a1\ufe0f\u5bfc\u51fa"))), global.a.createElement("div", {
            className : "dropdown-menu",
            id : "dropdown-menu4",
            role : "menu"
          }, global.a.createElement("div", {
            className : "dropdown-content"
          }, global.a.createElement("button", {
            href : "javascript:",
            className : "button is-white dropdown-item",
            onClick : this._export_txt
          }, "\u7eaf\u6587\u672c .txt")), global.a.createElement("div", {
            className : "dropdown-content"
          }, global.a.createElement("button", {
            href : "javascript:",
            className : "button is-white dropdown-item",
            onClick : this._export_md,
            disabled : !this.state.is_vip
          }, "Markdown .md")), global.a.createElement("div", {
            className : "dropdown-content"
          }, global.a.createElement("button", {
            className : "button is-white dropdown-item",
            onClick : this._export_enml,
            disabled : !this.state.is_vip
          }, "\u5370\u8c61\u7b14\u8bb0\u683c\u5f0f .enex")), global.a.createElement("div", {
            className : "dropdown-content"
          }, global.a.createElement("p", {
            style : {
              padding : "8px"
            }
          }, "md\u3001\u5370\u8c61\u7b14\u8bb0\u683c\u5f0f\u9700\u5f00\u901a\u4f1a\u5458\u624d\u80fd\u4e0b\u8f7d\uff0ctxt\u3001md\u5bfc\u51fa\u4f1a\u5bf9\u6bcf\u672c\u4e66\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\uff0c\u5370\u8c61\u7b14\u8bb0\u4f1a\u6c47\u603b\u6210\u4e00\u4e2a\u6587\u4ef6\u5bfc\u51fa ", global.a.createElement("a", {
            href : "https://weread.qnmlgb.tech/vip",
            target : "_blank"
          }, " vip ")))))), this.state.evernote && global.a.createElement("div", {
            style : {
              display : "flex",
              flexDirection : "row",
              alignItems : "center"
            }
          }, rightText.length > 0 && global.a.createElement("div", {
            style : {
              margin : "0 5px",
              color : "gray"
            }
          }, rightText), global.a.createElement("a", {
            style : {
              backgroundColor : "#e4e4e4",
              padding : "2px 5px",
              borderRadius : "5px",
              margin : "0 5px",
              color : "gray",
              cursor : "pointer"
            },
            onClick : this._sync
          }, "\u26a1\ufe0f\u540c\u6b65"), global.a.createElement("a", {
            style : {
              backgroundColor : "#e4e4e4",
              padding : "2px 5px",
              borderRadius : "5px",
              margin : "0 5px",
              color : "gray",
              cursor : "pointer"
            },
            onClick : function() {
              self.setState({
                evernote : null
              }, function() {
                chrome.storage.local.set({
                  evernoteToken : null
                });
              });
            }
          }, "\ud83d\udca5\u6ce8\u9500"), global.a.createElement("div", {
            style : {
              backgroundColor : "white",
              padding : "2px 5px",
              borderRadius : "5px",
              margin : "0 5px",
              color : "gray",
              cursor : "pointer"
            }
          }, "\ud83c\udfc6 ", this.state.evernote.username)), this.state.evernote && global.a.createElement("a", {
            style : {
              backgroundColor : "#e4e4e4",
              padding : "2px 5px",
              borderRadius : "5px",
              margin : "0 5px",
              color : "gray",
              cursor : "pointer"
            },
            href : "http://webook.qnmlgb.tech/v1/oauth/evernote?env=production&sandbox=false"
          }, "\u7ed1\u5b9a\u5370\u8c61\u7b14\u8bb0")));
        }
      }]), t;
    }(global.a.Component);
    Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
    tok.a.render(global.a.createElement(RedBox, null), document.getElementById("root"));
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(function(taskReg) {
        taskReg.unregister();
      }).catch(function(error) {
        console.error(error.message);
      });
    }
  },
  29 : function(markRead, msg, $) {
    (function(e) {
      /**
       * @param {!Function} Client
       * @param {!Function} EDAMClient
       * @return {undefined}
       */
      function extendClientWithEdamClient(Client, EDAMClient) {
        var key;
        for (key in EDAMClient.prototype) {
          if ("function" === typeof EDAMClient.prototype[key]) {
            Client.prototype[key] = EDAMClient.prototype[key];
          }
        }
      }
      /**
       * @param {string} name
       * @return {?}
       */
      function normalize(name) {
        var p = name && name.match(/:A=([^:]+):/);
        var n = p ? p[1] : "";
        return {
          "User-Agent" : "".concat(n, "/2.0.5; Node.js / ").concat(e.version)
        };
      }
      $.d(msg, "a", function() {
        return NoteStoreClient;
      });
      $.d(msg, "b", function() {
        return UserStoreClient;
      });
      var e = $(11);
      var options = $(12);
      var schema = $(15);
      var pkg = $(27);
      var self = $(28);
      var pg = $(58);
      var classes = $(35);
      var tablesongs = $(59);
      var googleMap = $.n(tablesongs);
      var filter_type = $(60);
      var type = $.n(filter_type);
      var UserStoreClient = function(e) {
        /**
         * @return {?}
         */
        function init() {
          var assetOptions;
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (Object(e.a)(this, init), !options.url) {
            throw Error("UserStoreClient requires a UserStore Url when initialized");
          }
          var self = new googleMap.a(options.url);
          var module = new type.a(self);
          return self.addHeaders(normalize(options.token)), (assetOptions = Object(schema.a)(this, Object(pkg.a)(init).call(this, module))).url = options.url, options.token && (assetOptions.token = options.token), Object(schema.a)(assetOptions);
        }
        return Object(self.a)(init, e), Object(options.a)(init, [{
          key : "getAuthToken",
          value : function() {
            var result = this;
            return new Promise(function(cb) {
              return cb(result.token);
            });
          }
        }]), init;
      }(classes.UserStore.Client);
      extendClientWithEdamClient(UserStoreClient, classes.UserStore.Client);
      var NoteStoreClient = function(e) {
        /**
         * @return {?}
         */
        function init() {
          var assetOptions;
          var options = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (Object(e.a)(this, init), !options.url) {
            throw Error("NoteStoreClient requires a NoteStore Url when initialized");
          }
          var self = new googleMap.a(options.url);
          var module = new type.a(self);
          return self.addHeaders(normalize(options.token)), (assetOptions = Object(schema.a)(this, Object(pkg.a)(init).call(this, module))).url = options.url, options.token && (assetOptions.token = options.token), Object(schema.a)(assetOptions);
        }
        return Object(self.a)(init, e), Object(options.a)(init, [{
          key : "getAuthToken",
          value : function() {
            var result = this;
            return new Promise(function(cb) {
              return cb(result.token);
            });
          }
        }]), init;
      }(pg.NoteStore.Client);
      extendClientWithEdamClient(NoteStoreClient, pg.NoteStore.Client);
    }).call(this, $(8));
  },
  35 : function(module, layer, $) {
    /**
     * @param {string} options
     * @return {undefined}
     */
    function App(options) {
      /** @type {string} */
      this.output = options;
      /** @type {number} */
      this.seqid = 0;
    }
    /**
     * @param {!Object} service
     * @param {!Object} options
     * @param {?} Request
     * @return {undefined}
     */
    function test(service, options, Request) {
      var methodName;
      for (methodName in this.service = service, this.stransport = options, this.processor = new Thrift.Processor, UserStore) {
        if (service[methodName]) {
          this.processor.addMethod(UserStore[methodName], service[methodName].bind(service));
        }
      }
      this.stransport.process = function(createTableSql, url, noop) {
        var request = new Request(createTableSql);
        var options = new Request(url);
        this.processor.process(request, options, noop);
      }.bind(this);
    }
    var Thrift = $(18);
    var self = $(56);
    var $cs = $(106);
    /** @type {number} */
    module.exports.EDAM_VERSION_MAJOR = 1;
    /** @type {number} */
    module.exports.EDAM_VERSION_MINOR = 28;
    module.exports.PublicUserInfo = Thrift.Struct.define("PublicUserInfo", {
      1 : {
        alias : "userId",
        type : Thrift.Type.I32
      },
      7 : {
        alias : "serviceLevel",
        type : Thrift.Type.I32
      },
      4 : {
        alias : "username",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "noteStoreUrl",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "webApiUrlPrefix",
        type : Thrift.Type.STRING
      }
    });
    module.exports.UserUrls = Thrift.Struct.define("UserUrls", {
      1 : {
        alias : "noteStoreUrl",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "webApiUrlPrefix",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "userStoreUrl",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "utilityUrl",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "messageStoreUrl",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "userWebSocketUrl",
        type : Thrift.Type.STRING
      }
    });
    module.exports.AuthenticationResult = Thrift.Struct.define("AuthenticationResult", {
      1 : {
        alias : "currentTime",
        type : Thrift.Type.I64
      },
      2 : {
        alias : "authenticationToken",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "expiration",
        type : Thrift.Type.I64
      },
      4 : {
        alias : "user",
        type : Thrift.Type.STRUCT,
        def : self.User
      },
      5 : {
        alias : "publicUserInfo",
        type : Thrift.Type.STRUCT,
        def : module.exports.PublicUserInfo
      },
      6 : {
        alias : "noteStoreUrl",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "webApiUrlPrefix",
        type : Thrift.Type.STRING
      },
      8 : {
        alias : "secondFactorRequired",
        type : Thrift.Type.BOOL
      },
      9 : {
        alias : "secondFactorDeliveryHint",
        type : Thrift.Type.STRING
      },
      10 : {
        alias : "urls",
        type : Thrift.Type.STRUCT,
        def : module.exports.UserUrls
      }
    });
    module.exports.BootstrapSettings = Thrift.Struct.define("BootstrapSettings", {
      1 : {
        alias : "serviceHost",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "marketingUrl",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "supportUrl",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "accountEmailDomain",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "enableFacebookSharing",
        type : Thrift.Type.BOOL
      },
      6 : {
        alias : "enableGiftSubscriptions",
        type : Thrift.Type.BOOL
      },
      7 : {
        alias : "enableSupportTickets",
        type : Thrift.Type.BOOL
      },
      8 : {
        alias : "enableSharedNotebooks",
        type : Thrift.Type.BOOL
      },
      9 : {
        alias : "enableSingleNoteSharing",
        type : Thrift.Type.BOOL
      },
      10 : {
        alias : "enableSponsoredAccounts",
        type : Thrift.Type.BOOL
      },
      11 : {
        alias : "enableTwitterSharing",
        type : Thrift.Type.BOOL
      },
      12 : {
        alias : "enableLinkedInSharing",
        type : Thrift.Type.BOOL
      },
      13 : {
        alias : "enablePublicNotebooks",
        type : Thrift.Type.BOOL
      },
      16 : {
        alias : "enableGoogle",
        type : Thrift.Type.BOOL
      }
    });
    module.exports.BootstrapProfile = Thrift.Struct.define("BootstrapProfile", {
      1 : {
        alias : "name",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "settings",
        type : Thrift.Type.STRUCT,
        def : module.exports.BootstrapSettings
      }
    });
    module.exports.BootstrapInfo = Thrift.Struct.define("BootstrapInfo", {
      1 : {
        alias : "profiles",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRUCT, module.exports.BootstrapProfile)
      }
    });
    var UserStore = module.exports.UserStore = {};
    UserStore.checkVersion = Thrift.Method.define({
      alias : "checkVersion",
      args : Thrift.Struct.define("checkVersionArgs", {
        1 : {
          alias : "clientName",
          type : Thrift.Type.STRING,
          index : 0
        },
        2 : {
          alias : "edamVersionMajor",
          type : Thrift.Type.I16,
          index : 1
        },
        3 : {
          alias : "edamVersionMinor",
          type : Thrift.Type.I16,
          index : 2
        }
      }),
      result : Thrift.Struct.define("checkVersionResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.BOOL
        }
      })
    });
    UserStore.getBootstrapInfo = Thrift.Method.define({
      alias : "getBootstrapInfo",
      args : Thrift.Struct.define("getBootstrapInfoArgs", {
        1 : {
          alias : "locale",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("getBootstrapInfoResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : module.exports.BootstrapInfo
        }
      })
    });
    UserStore.authenticateLongSession = Thrift.Method.define({
      alias : "authenticateLongSession",
      args : Thrift.Struct.define("authenticateLongSessionArgs", {
        1 : {
          alias : "username",
          type : Thrift.Type.STRING,
          index : 0
        },
        2 : {
          alias : "password",
          type : Thrift.Type.STRING,
          index : 1
        },
        3 : {
          alias : "consumerKey",
          type : Thrift.Type.STRING,
          index : 2
        },
        4 : {
          alias : "consumerSecret",
          type : Thrift.Type.STRING,
          index : 3
        },
        5 : {
          alias : "deviceIdentifier",
          type : Thrift.Type.STRING,
          index : 4
        },
        6 : {
          alias : "deviceDescription",
          type : Thrift.Type.STRING,
          index : 5
        },
        7 : {
          alias : "supportsTwoFactor",
          type : Thrift.Type.BOOL,
          index : 6
        }
      }),
      result : Thrift.Struct.define("authenticateLongSessionResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : module.exports.AuthenticationResult
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.completeTwoFactorAuthentication = Thrift.Method.define({
      alias : "completeTwoFactorAuthentication",
      args : Thrift.Struct.define("completeTwoFactorAuthenticationArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        },
        2 : {
          alias : "oneTimeCode",
          type : Thrift.Type.STRING,
          index : 1
        },
        3 : {
          alias : "deviceIdentifier",
          type : Thrift.Type.STRING,
          index : 2
        },
        4 : {
          alias : "deviceDescription",
          type : Thrift.Type.STRING,
          index : 3
        }
      }),
      result : Thrift.Struct.define("completeTwoFactorAuthenticationResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : module.exports.AuthenticationResult
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.revokeLongSession = Thrift.Method.define({
      alias : "revokeLongSession",
      args : Thrift.Struct.define("revokeLongSessionArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("revokeLongSessionResult", {
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.authenticateToBusiness = Thrift.Method.define({
      alias : "authenticateToBusiness",
      args : Thrift.Struct.define("authenticateToBusinessArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("authenticateToBusinessResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : module.exports.AuthenticationResult
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getUser = Thrift.Method.define({
      alias : "getUser",
      args : Thrift.Struct.define("getUserArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("getUserResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : self.User
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getPublicUserInfo = Thrift.Method.define({
      alias : "getPublicUserInfo",
      args : Thrift.Struct.define("getPublicUserInfoArgs", {
        1 : {
          alias : "username",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("getPublicUserInfoResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : module.exports.PublicUserInfo
        },
        1 : {
          alias : "notFoundException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        }
      })
    });
    UserStore.getPremiumInfo = Thrift.Method.define({
      alias : "getPremiumInfo",
      args : Thrift.Struct.define("getPremiumInfoArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("getPremiumInfoResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : self.PremiumInfo
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getUserUrls = Thrift.Method.define({
      alias : "getUserUrls",
      args : Thrift.Struct.define("getUserUrlsArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("getUserUrlsResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : module.exports.UserUrls
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.inviteToBusiness = Thrift.Method.define({
      alias : "inviteToBusiness",
      args : Thrift.Struct.define("inviteToBusinessArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        },
        2 : {
          alias : "emailAddress",
          type : Thrift.Type.STRING,
          index : 1
        }
      }),
      result : Thrift.Struct.define("inviteToBusinessResult", {
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.removeFromBusiness = Thrift.Method.define({
      alias : "removeFromBusiness",
      args : Thrift.Struct.define("removeFromBusinessArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        },
        2 : {
          alias : "emailAddress",
          type : Thrift.Type.STRING,
          index : 1
        }
      }),
      result : Thrift.Struct.define("removeFromBusinessResult", {
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.updateBusinessUserIdentifier = Thrift.Method.define({
      alias : "updateBusinessUserIdentifier",
      args : Thrift.Struct.define("updateBusinessUserIdentifierArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        },
        2 : {
          alias : "oldEmailAddress",
          type : Thrift.Type.STRING,
          index : 1
        },
        3 : {
          alias : "newEmailAddress",
          type : Thrift.Type.STRING,
          index : 2
        }
      }),
      result : Thrift.Struct.define("updateBusinessUserIdentifierResult", {
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.listBusinessUsers = Thrift.Method.define({
      alias : "listBusinessUsers",
      args : Thrift.Struct.define("listBusinessUsersArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        }
      }),
      result : Thrift.Struct.define("listBusinessUsersResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.LIST,
          def : Thrift.List.define(Thrift.Type.STRUCT, self.UserProfile)
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.listBusinessInvitations = Thrift.Method.define({
      alias : "listBusinessInvitations",
      args : Thrift.Struct.define("listBusinessInvitationsArgs", {
        1 : {
          alias : "authenticationToken",
          type : Thrift.Type.STRING,
          index : 0
        },
        2 : {
          alias : "includeRequestedInvitations",
          type : Thrift.Type.BOOL,
          index : 1
        }
      }),
      result : Thrift.Struct.define("listBusinessInvitationsResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.LIST,
          def : Thrift.List.define(Thrift.Type.STRUCT, self.BusinessInvitation)
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getAccountLimits = Thrift.Method.define({
      alias : "getAccountLimits",
      args : Thrift.Struct.define("getAccountLimitsArgs", {
        1 : {
          alias : "serviceLevel",
          type : Thrift.Type.I32,
          index : 0
        }
      }),
      result : Thrift.Struct.define("getAccountLimitsResult", {
        0 : {
          alias : "returnValue",
          type : Thrift.Type.STRUCT,
          def : self.AccountLimits
        },
        1 : {
          alias : "userException",
          type : Thrift.Type.EXCEPTION,
          def : $cs.EDAMUserException
        }
      })
    });
    /**
     * @param {string} clientName
     * @param {?} edamVersionMajor
     * @param {?} edamVersionMinor
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.checkVersion = function(clientName, edamVersionMajor, edamVersionMinor, callback) {
      var mdef = UserStore.checkVersion;
      var args = new mdef.args;
      /** @type {string} */
      args.clientName = clientName;
      args.edamVersionMajor = edamVersionMajor;
      args.edamVersionMinor = edamVersionMinor;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {string} locale
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.getBootstrapInfo = function(locale, callback) {
      var mdef = UserStore.getBootstrapInfo;
      var args = new mdef.args;
      /** @type {string} */
      args.locale = locale;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {!Object} username
     * @param {!Object} password
     * @param {string} consumerKey
     * @param {string} consumerSecret
     * @param {?} deviceIdentifier
     * @param {?} deviceDescription
     * @param {?} supportsTwoFactor
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.authenticateLongSession = function(username, password, consumerKey, consumerSecret, deviceIdentifier, deviceDescription, supportsTwoFactor, callback) {
      var mdef = UserStore.authenticateLongSession;
      var args = new mdef.args;
      /** @type {!Object} */
      args.username = username;
      /** @type {!Object} */
      args.password = password;
      /** @type {string} */
      args.consumerKey = consumerKey;
      /** @type {string} */
      args.consumerSecret = consumerSecret;
      args.deviceIdentifier = deviceIdentifier;
      args.deviceDescription = deviceDescription;
      args.supportsTwoFactor = supportsTwoFactor;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} oneTimeCode
     * @param {?} deviceIdentifier
     * @param {?} deviceDescription
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.completeTwoFactorAuthentication = function(authenticationToken, oneTimeCode, deviceIdentifier, deviceDescription, callback) {
      var mdef = UserStore.completeTwoFactorAuthentication;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.oneTimeCode = oneTimeCode;
      args.deviceIdentifier = deviceIdentifier;
      args.deviceDescription = deviceDescription;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.revokeLongSession = function(authenticationToken, callback) {
      var mdef = UserStore.revokeLongSession;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.authenticateToBusiness = function(authenticationToken, callback) {
      var mdef = UserStore.authenticateToBusiness;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.getUser = function(authenticationToken, callback) {
      console.log("**callback**", callback, this.output, this.seqid);
      var mdef = UserStore.getUser;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {!Object} username
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.getPublicUserInfo = function(username, callback) {
      var mdef = UserStore.getPublicUserInfo;
      var args = new mdef.args;
      /** @type {!Object} */
      args.username = username;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.getPremiumInfo = function(authenticationToken, callback) {
      var mdef = UserStore.getPremiumInfo;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.getUserUrls = function(authenticationToken, callback) {
      var mdef = UserStore.getUserUrls;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Object} emailAddress
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.inviteToBusiness = function(authenticationToken, emailAddress, callback) {
      var mdef = UserStore.inviteToBusiness;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Object} */
      args.emailAddress = emailAddress;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Object} emailAddress
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.removeFromBusiness = function(authenticationToken, emailAddress, callback) {
      var mdef = UserStore.removeFromBusiness;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Object} */
      args.emailAddress = emailAddress;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} oldEmailAddress
     * @param {?} newEmailAddress
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.updateBusinessUserIdentifier = function(authenticationToken, oldEmailAddress, newEmailAddress, callback) {
      var mdef = UserStore.updateBusinessUserIdentifier;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.oldEmailAddress = oldEmailAddress;
      args.newEmailAddress = newEmailAddress;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {string} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.listBusinessUsers = function(authenticationToken, callback) {
      var mdef = UserStore.listBusinessUsers;
      var args = new mdef.args;
      /** @type {string} */
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} includeRequestedInvitations
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.listBusinessInvitations = function(authenticationToken, includeRequestedInvitations, callback) {
      var mdef = UserStore.listBusinessInvitations;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.includeRequestedInvitations = includeRequestedInvitations;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} serviceLevel
     * @param {!Function} callback
     * @return {undefined}
     */
    App.prototype.getAccountLimits = function(serviceLevel, callback) {
      var mdef = UserStore.getAccountLimits;
      var args = new mdef.args;
      args.serviceLevel = serviceLevel;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /** @type {function(string): undefined} */
    module.exports.UserStore.Client = App;
    /**
     * @return {undefined}
     */
    test.prototype.start = function() {
      this.stransport.listen();
    };
    /**
     * @return {undefined}
     */
    test.prototype.stop = function() {
      this.stransport.close();
    };
    /** @type {function(!Object, !Object, ?): undefined} */
    module.exports.UserStore.Server = test;
  },
  56 : function(req, cltSocket, head) {
    var Thrift = head(18);
    head(105);
    req.exports.PrivilegeLevel = {
      NORMAL : 1,
      PREMIUM : 3,
      VIP : 5,
      MANAGER : 7,
      SUPPORT : 8,
      ADMIN : 9
    };
    req.exports.ServiceLevel = {
      BASIC : 1,
      PLUS : 2,
      PREMIUM : 3
    };
    req.exports.QueryFormat = {
      USER : 1,
      SEXP : 2
    };
    req.exports.NoteSortOrder = {
      CREATED : 1,
      UPDATED : 2,
      RELEVANCE : 3,
      UPDATE_SEQUENCE_NUMBER : 4,
      TITLE : 5
    };
    req.exports.PremiumOrderStatus = {
      NONE : 0,
      PENDING : 1,
      ACTIVE : 2,
      FAILED : 3,
      CANCELLATION_PENDING : 4,
      CANCELED : 5
    };
    req.exports.SharedNotebookPrivilegeLevel = {
      READ_NOTEBOOK : 0,
      MODIFY_NOTEBOOK_PLUS_ACTIVITY : 1,
      READ_NOTEBOOK_PLUS_ACTIVITY : 2,
      GROUP : 3,
      FULL_ACCESS : 4,
      BUSINESS_FULL_ACCESS : 5
    };
    req.exports.SharedNotePrivilegeLevel = {
      READ_NOTE : 0,
      MODIFY_NOTE : 1,
      FULL_ACCESS : 2
    };
    req.exports.SponsoredGroupRole = {
      GROUP_MEMBER : 1,
      GROUP_ADMIN : 2,
      GROUP_OWNER : 3
    };
    req.exports.BusinessUserRole = {
      ADMIN : 1,
      NORMAL : 2
    };
    req.exports.SharedNotebookInstanceRestrictions = {
      ASSIGNED : 1,
      NO_SHARED_NOTEBOOKS : 2
    };
    req.exports.ReminderEmailConfig = {
      DO_NOT_SEND : 1,
      SEND_DAILY_EMAIL : 2
    };
    req.exports.BusinessInvitationStatus = {
      APPROVED : 0,
      REQUESTED : 1,
      REDEEMED : 2
    };
    req.exports.ContactType = {
      EVERNOTE : 1,
      SMS : 2,
      FACEBOOK : 3,
      EMAIL : 4,
      TWITTER : 5,
      LINKEDIN : 6
    };
    req.exports.RelatedContentType = {
      NEWS_ARTICLE : 1,
      PROFILE_PERSON : 2,
      PROFILE_ORGANIZATION : 3,
      REFERENCE_MATERIAL : 4
    };
    req.exports.RelatedContentAccess = {
      NOT_ACCESSIBLE : 0,
      DIRECT_LINK_ACCESS_OK : 1,
      DIRECT_LINK_LOGIN_REQUIRED : 2,
      DIRECT_LINK_EMBEDDED_VIEW : 3
    };
    req.exports.UserIdentityType = {
      EVERNOTE_USERID : 1,
      EMAIL : 2,
      IDENTITYID : 3
    };
    /** @type {string} */
    req.exports.CLASSIFICATION_RECIPE_USER_NON_RECIPE = "000";
    /** @type {string} */
    req.exports.CLASSIFICATION_RECIPE_USER_RECIPE = "001";
    /** @type {string} */
    req.exports.CLASSIFICATION_RECIPE_SERVICE_RECIPE = "002";
    /** @type {string} */
    req.exports.EDAM_NOTE_SOURCE_WEB_CLIP = "web.clip";
    /** @type {string} */
    req.exports.EDAM_NOTE_SOURCE_WEB_CLIP_SIMPLIFIED = "Clearly";
    /** @type {string} */
    req.exports.EDAM_NOTE_SOURCE_MAIL_CLIP = "mail.clip";
    /** @type {string} */
    req.exports.EDAM_NOTE_SOURCE_MAIL_SMTP_GATEWAY = "mail.smtp";
    req.exports.Data = Thrift.Struct.define("Data", {
      1 : {
        alias : "bodyHash",
        type : Thrift.Type.BINARY
      },
      2 : {
        alias : "size",
        type : Thrift.Type.I32
      },
      3 : {
        alias : "body",
        type : Thrift.Type.BINARY
      }
    });
    req.exports.UserAttributes = Thrift.Struct.define("UserAttributes", {
      1 : {
        alias : "defaultLocationName",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "defaultLatitude",
        type : Thrift.Type.DOUBLE
      },
      3 : {
        alias : "defaultLongitude",
        type : Thrift.Type.DOUBLE
      },
      4 : {
        alias : "preactivation",
        type : Thrift.Type.BOOL
      },
      5 : {
        alias : "viewedPromotions",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRING)
      },
      6 : {
        alias : "incomingEmailAddress",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "recentMailedAddresses",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRING)
      },
      9 : {
        alias : "comments",
        type : Thrift.Type.STRING
      },
      11 : {
        alias : "dateAgreedToTermsOfService",
        type : Thrift.Type.I64
      },
      12 : {
        alias : "maxReferrals",
        type : Thrift.Type.I32
      },
      13 : {
        alias : "referralCount",
        type : Thrift.Type.I32
      },
      14 : {
        alias : "refererCode",
        type : Thrift.Type.STRING
      },
      15 : {
        alias : "sentEmailDate",
        type : Thrift.Type.I64
      },
      16 : {
        alias : "sentEmailCount",
        type : Thrift.Type.I32
      },
      17 : {
        alias : "dailyEmailLimit",
        type : Thrift.Type.I32
      },
      18 : {
        alias : "emailOptOutDate",
        type : Thrift.Type.I64
      },
      19 : {
        alias : "partnerEmailOptInDate",
        type : Thrift.Type.I64
      },
      20 : {
        alias : "preferredLanguage",
        type : Thrift.Type.STRING
      },
      21 : {
        alias : "preferredCountry",
        type : Thrift.Type.STRING
      },
      22 : {
        alias : "clipFullPage",
        type : Thrift.Type.BOOL
      },
      23 : {
        alias : "twitterUserName",
        type : Thrift.Type.STRING
      },
      24 : {
        alias : "twitterId",
        type : Thrift.Type.STRING
      },
      25 : {
        alias : "groupName",
        type : Thrift.Type.STRING
      },
      26 : {
        alias : "recognitionLanguage",
        type : Thrift.Type.STRING
      },
      28 : {
        alias : "referralProof",
        type : Thrift.Type.STRING
      },
      29 : {
        alias : "educationalDiscount",
        type : Thrift.Type.BOOL
      },
      30 : {
        alias : "businessAddress",
        type : Thrift.Type.STRING
      },
      31 : {
        alias : "hideSponsorBilling",
        type : Thrift.Type.BOOL
      },
      32 : {
        alias : "taxExempt",
        type : Thrift.Type.BOOL
      },
      33 : {
        alias : "useEmailAutoFiling",
        type : Thrift.Type.BOOL
      },
      34 : {
        alias : "reminderEmailConfig",
        type : Thrift.Type.I32
      },
      35 : {
        alias : "emailAddressLastConfirmed",
        type : Thrift.Type.I64
      },
      36 : {
        alias : "passwordUpdated",
        type : Thrift.Type.I64
      },
      37 : {
        alias : "salesforcePushEnabled",
        type : Thrift.Type.BOOL
      },
      38 : {
        alias : "shouldLogClientEvent",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.BusinessUserAttributes = Thrift.Struct.define("BusinessUserAttributes", {
      1 : {
        alias : "title",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "location",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "department",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "mobilePhone",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "linkedInProfileUrl",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "workPhone",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "companyStartDate",
        type : Thrift.Type.I64
      }
    });
    req.exports.Accounting = Thrift.Struct.define("Accounting", {
      2 : {
        alias : "uploadLimitEnd",
        type : Thrift.Type.I64
      },
      3 : {
        alias : "uploadLimitNextMonth",
        type : Thrift.Type.I64
      },
      4 : {
        alias : "premiumServiceStatus",
        type : Thrift.Type.I32
      },
      5 : {
        alias : "premiumOrderNumber",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "premiumCommerceService",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "premiumServiceStart",
        type : Thrift.Type.I64
      },
      8 : {
        alias : "premiumServiceSKU",
        type : Thrift.Type.STRING
      },
      9 : {
        alias : "lastSuccessfulCharge",
        type : Thrift.Type.I64
      },
      10 : {
        alias : "lastFailedCharge",
        type : Thrift.Type.I64
      },
      11 : {
        alias : "lastFailedChargeReason",
        type : Thrift.Type.STRING
      },
      12 : {
        alias : "nextPaymentDue",
        type : Thrift.Type.I64
      },
      13 : {
        alias : "premiumLockUntil",
        type : Thrift.Type.I64
      },
      14 : {
        alias : "updated",
        type : Thrift.Type.I64
      },
      16 : {
        alias : "premiumSubscriptionNumber",
        type : Thrift.Type.STRING
      },
      17 : {
        alias : "lastRequestedCharge",
        type : Thrift.Type.I64
      },
      18 : {
        alias : "currency",
        type : Thrift.Type.STRING
      },
      19 : {
        alias : "unitPrice",
        type : Thrift.Type.I32
      },
      20 : {
        alias : "businessId",
        type : Thrift.Type.I32
      },
      21 : {
        alias : "businessName",
        type : Thrift.Type.STRING
      },
      22 : {
        alias : "businessRole",
        type : Thrift.Type.I32
      },
      23 : {
        alias : "unitDiscount",
        type : Thrift.Type.I32
      },
      24 : {
        alias : "nextChargeDate",
        type : Thrift.Type.I64
      },
      25 : {
        alias : "availablePoints",
        type : Thrift.Type.I32
      }
    });
    req.exports.BusinessUserInfo = Thrift.Struct.define("BusinessUserInfo", {
      1 : {
        alias : "businessId",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "businessName",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "role",
        type : Thrift.Type.I32
      },
      4 : {
        alias : "email",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "updated",
        type : Thrift.Type.I64
      }
    });
    req.exports.AccountLimits = Thrift.Struct.define("AccountLimits", {
      1 : {
        alias : "userMailLimitDaily",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "noteSizeMax",
        type : Thrift.Type.I64
      },
      3 : {
        alias : "resourceSizeMax",
        type : Thrift.Type.I64
      },
      4 : {
        alias : "userLinkedNotebookMax",
        type : Thrift.Type.I32
      },
      5 : {
        alias : "uploadLimit",
        type : Thrift.Type.I64
      },
      6 : {
        alias : "userNoteCountMax",
        type : Thrift.Type.I32
      },
      7 : {
        alias : "userNotebookCountMax",
        type : Thrift.Type.I32
      },
      8 : {
        alias : "userTagCountMax",
        type : Thrift.Type.I32
      },
      9 : {
        alias : "noteTagCountMax",
        type : Thrift.Type.I32
      },
      10 : {
        alias : "userSavedSearchesMax",
        type : Thrift.Type.I32
      },
      11 : {
        alias : "noteResourceCountMax",
        type : Thrift.Type.I32
      }
    });
    req.exports.PremiumInfo = Thrift.Struct.define("PremiumInfo", {
      1 : {
        alias : "currentTime",
        type : Thrift.Type.I64
      },
      2 : {
        alias : "premium",
        type : Thrift.Type.BOOL
      },
      3 : {
        alias : "premiumRecurring",
        type : Thrift.Type.BOOL
      },
      4 : {
        alias : "premiumExpirationDate",
        type : Thrift.Type.I64
      },
      5 : {
        alias : "premiumExtendable",
        type : Thrift.Type.BOOL
      },
      6 : {
        alias : "premiumPending",
        type : Thrift.Type.BOOL
      },
      7 : {
        alias : "premiumCancellationPending",
        type : Thrift.Type.BOOL
      },
      8 : {
        alias : "canPurchaseUploadAllowance",
        type : Thrift.Type.BOOL
      },
      11 : {
        alias : "premiumUpgradable",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.User = Thrift.Struct.define("User", {
      1 : {
        alias : "id",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "username",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "email",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "name",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "timezone",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "privilege",
        type : Thrift.Type.I32
      },
      21 : {
        alias : "serviceLevel",
        type : Thrift.Type.I32
      },
      9 : {
        alias : "created",
        type : Thrift.Type.I64
      },
      10 : {
        alias : "updated",
        type : Thrift.Type.I64
      },
      11 : {
        alias : "deleted",
        type : Thrift.Type.I64
      },
      13 : {
        alias : "active",
        type : Thrift.Type.BOOL
      },
      14 : {
        alias : "shardId",
        type : Thrift.Type.STRING
      },
      15 : {
        alias : "attributes",
        type : Thrift.Type.STRUCT,
        def : req.exports.UserAttributes
      },
      16 : {
        alias : "accounting",
        type : Thrift.Type.STRUCT,
        def : req.exports.Accounting
      },
      18 : {
        alias : "businessUserInfo",
        type : Thrift.Type.STRUCT,
        def : req.exports.BusinessUserInfo
      },
      19 : {
        alias : "photoUrl",
        type : Thrift.Type.STRING
      },
      20 : {
        alias : "photoLastUpdated",
        type : Thrift.Type.I64
      },
      22 : {
        alias : "accountLimits",
        type : Thrift.Type.STRUCT,
        def : req.exports.AccountLimits
      }
    });
    req.exports.Contact = Thrift.Struct.define("Contact", {
      1 : {
        alias : "name",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "id",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "type",
        type : Thrift.Type.I32
      },
      4 : {
        alias : "photoUrl",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "photoLastUpdated",
        type : Thrift.Type.I64
      },
      6 : {
        alias : "messagingPermit",
        type : Thrift.Type.BINARY
      },
      7 : {
        alias : "messagingPermitExpires",
        type : Thrift.Type.I64
      }
    });
    req.exports.Identity = Thrift.Struct.define("Identity", {
      1 : {
        alias : "id",
        type : Thrift.Type.I64
      },
      2 : {
        alias : "contact",
        type : Thrift.Type.STRUCT,
        def : req.exports.Contact
      },
      3 : {
        alias : "userId",
        type : Thrift.Type.I32
      },
      4 : {
        alias : "deactivated",
        type : Thrift.Type.BOOL
      },
      5 : {
        alias : "sameBusiness",
        type : Thrift.Type.BOOL
      },
      6 : {
        alias : "blocked",
        type : Thrift.Type.BOOL
      },
      7 : {
        alias : "userConnected",
        type : Thrift.Type.BOOL
      },
      8 : {
        alias : "eventId",
        type : Thrift.Type.I64
      }
    });
    req.exports.Tag = Thrift.Struct.define("Tag", {
      1 : {
        alias : "guid",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "name",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "parentGuid",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "updateSequenceNum",
        type : Thrift.Type.I32
      }
    });
    req.exports.LazyMap = Thrift.Struct.define("LazyMap", {
      1 : {
        alias : "keysOnly",
        type : Thrift.Type.SET,
        def : Thrift.Set.define(Thrift.Type.STRING)
      },
      2 : {
        alias : "fullMap",
        type : Thrift.Type.MAP,
        def : Thrift.Map.define(Thrift.Type.STRING, Thrift.Type.STRING)
      }
    });
    req.exports.ResourceAttributes = Thrift.Struct.define("ResourceAttributes", {
      1 : {
        alias : "sourceURL",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "timestamp",
        type : Thrift.Type.I64
      },
      3 : {
        alias : "latitude",
        type : Thrift.Type.DOUBLE
      },
      4 : {
        alias : "longitude",
        type : Thrift.Type.DOUBLE
      },
      5 : {
        alias : "altitude",
        type : Thrift.Type.DOUBLE
      },
      6 : {
        alias : "cameraMake",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "cameraModel",
        type : Thrift.Type.STRING
      },
      8 : {
        alias : "clientWillIndex",
        type : Thrift.Type.BOOL
      },
      9 : {
        alias : "recoType",
        type : Thrift.Type.STRING
      },
      10 : {
        alias : "fileName",
        type : Thrift.Type.STRING
      },
      11 : {
        alias : "attachment",
        type : Thrift.Type.BOOL
      },
      12 : {
        alias : "applicationData",
        type : Thrift.Type.STRUCT,
        def : req.exports.LazyMap
      }
    });
    req.exports.Resource = Thrift.Struct.define("Resource", {
      1 : {
        alias : "guid",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "noteGuid",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "data",
        type : Thrift.Type.STRUCT,
        def : req.exports.Data
      },
      4 : {
        alias : "mime",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "width",
        type : Thrift.Type.I16
      },
      6 : {
        alias : "height",
        type : Thrift.Type.I16
      },
      7 : {
        alias : "duration",
        type : Thrift.Type.I16
      },
      8 : {
        alias : "active",
        type : Thrift.Type.BOOL
      },
      9 : {
        alias : "recognition",
        type : Thrift.Type.STRUCT,
        def : req.exports.Data
      },
      11 : {
        alias : "attributes",
        type : Thrift.Type.STRUCT,
        def : req.exports.ResourceAttributes
      },
      12 : {
        alias : "updateSequenceNum",
        type : Thrift.Type.I32
      },
      13 : {
        alias : "alternateData",
        type : Thrift.Type.STRUCT,
        def : req.exports.Data
      }
    });
    req.exports.NoteAttributes = Thrift.Struct.define("NoteAttributes", {
      1 : {
        alias : "subjectDate",
        type : Thrift.Type.I64
      },
      10 : {
        alias : "latitude",
        type : Thrift.Type.DOUBLE
      },
      11 : {
        alias : "longitude",
        type : Thrift.Type.DOUBLE
      },
      12 : {
        alias : "altitude",
        type : Thrift.Type.DOUBLE
      },
      13 : {
        alias : "author",
        type : Thrift.Type.STRING
      },
      14 : {
        alias : "source",
        type : Thrift.Type.STRING
      },
      15 : {
        alias : "sourceURL",
        type : Thrift.Type.STRING
      },
      16 : {
        alias : "sourceApplication",
        type : Thrift.Type.STRING
      },
      17 : {
        alias : "shareDate",
        type : Thrift.Type.I64
      },
      18 : {
        alias : "reminderOrder",
        type : Thrift.Type.I64
      },
      19 : {
        alias : "reminderDoneTime",
        type : Thrift.Type.I64
      },
      20 : {
        alias : "reminderTime",
        type : Thrift.Type.I64
      },
      21 : {
        alias : "placeName",
        type : Thrift.Type.STRING
      },
      22 : {
        alias : "contentClass",
        type : Thrift.Type.STRING
      },
      23 : {
        alias : "applicationData",
        type : Thrift.Type.STRUCT,
        def : req.exports.LazyMap
      },
      24 : {
        alias : "lastEditedBy",
        type : Thrift.Type.STRING
      },
      26 : {
        alias : "classifications",
        type : Thrift.Type.MAP,
        def : Thrift.Map.define(Thrift.Type.STRING, Thrift.Type.STRING)
      },
      27 : {
        alias : "creatorId",
        type : Thrift.Type.I32
      },
      28 : {
        alias : "lastEditorId",
        type : Thrift.Type.I32
      },
      29 : {
        alias : "sharedWithBusiness",
        type : Thrift.Type.BOOL
      },
      30 : {
        alias : "conflictSourceNoteGuid",
        type : Thrift.Type.STRING
      },
      31 : {
        alias : "noteTitleQuality",
        type : Thrift.Type.I32
      }
    });
    req.exports.SharedNote = Thrift.Struct.define("SharedNote", {
      1 : {
        alias : "sharerUserID",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "recipientIdentity",
        type : Thrift.Type.STRUCT,
        def : req.exports.Identity
      },
      3 : {
        alias : "privilege",
        type : Thrift.Type.I32
      },
      4 : {
        alias : "serviceCreated",
        type : Thrift.Type.I64
      },
      5 : {
        alias : "serviceUpdated",
        type : Thrift.Type.I64
      },
      6 : {
        alias : "serviceAssigned",
        type : Thrift.Type.I64
      }
    });
    req.exports.NoteRestrictions = Thrift.Struct.define("NoteRestrictions", {
      1 : {
        alias : "noUpdateTitle",
        type : Thrift.Type.BOOL
      },
      2 : {
        alias : "noUpdateContent",
        type : Thrift.Type.BOOL
      },
      3 : {
        alias : "noEmail",
        type : Thrift.Type.BOOL
      },
      4 : {
        alias : "noShare",
        type : Thrift.Type.BOOL
      },
      5 : {
        alias : "noSharePublicly",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.NoteLimits = Thrift.Struct.define("NoteLimits", {
      1 : {
        alias : "noteResourceCountMax",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "uploadLimit",
        type : Thrift.Type.I64
      },
      3 : {
        alias : "resourceSizeMax",
        type : Thrift.Type.I64
      },
      4 : {
        alias : "noteSizeMax",
        type : Thrift.Type.I64
      },
      5 : {
        alias : "uploaded",
        type : Thrift.Type.I64
      }
    });
    req.exports.Note = Thrift.Struct.define("Note", {
      1 : {
        alias : "guid",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "title",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "content",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "contentHash",
        type : Thrift.Type.BINARY
      },
      5 : {
        alias : "contentLength",
        type : Thrift.Type.I32
      },
      6 : {
        alias : "created",
        type : Thrift.Type.I64
      },
      7 : {
        alias : "updated",
        type : Thrift.Type.I64
      },
      8 : {
        alias : "deleted",
        type : Thrift.Type.I64
      },
      9 : {
        alias : "active",
        type : Thrift.Type.BOOL
      },
      10 : {
        alias : "updateSequenceNum",
        type : Thrift.Type.I32
      },
      11 : {
        alias : "notebookGuid",
        type : Thrift.Type.STRING
      },
      12 : {
        alias : "tagGuids",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRING)
      },
      13 : {
        alias : "resources",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRUCT, req.exports.Resource)
      },
      14 : {
        alias : "attributes",
        type : Thrift.Type.STRUCT,
        def : req.exports.NoteAttributes
      },
      15 : {
        alias : "tagNames",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRING)
      },
      16 : {
        alias : "sharedNotes",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRUCT, req.exports.SharedNote)
      },
      17 : {
        alias : "restrictions",
        type : Thrift.Type.STRUCT,
        def : req.exports.NoteRestrictions
      },
      18 : {
        alias : "limits",
        type : Thrift.Type.STRUCT,
        def : req.exports.NoteLimits
      }
    });
    req.exports.Publishing = Thrift.Struct.define("Publishing", {
      1 : {
        alias : "uri",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "order",
        type : Thrift.Type.I32
      },
      3 : {
        alias : "ascending",
        type : Thrift.Type.BOOL
      },
      4 : {
        alias : "publicDescription",
        type : Thrift.Type.STRING
      }
    });
    req.exports.BusinessNotebook = Thrift.Struct.define("BusinessNotebook", {
      1 : {
        alias : "notebookDescription",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "privilege",
        type : Thrift.Type.I32
      },
      3 : {
        alias : "recommended",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.SavedSearchScope = Thrift.Struct.define("SavedSearchScope", {
      1 : {
        alias : "includeAccount",
        type : Thrift.Type.BOOL
      },
      2 : {
        alias : "includePersonalLinkedNotebooks",
        type : Thrift.Type.BOOL
      },
      3 : {
        alias : "includeBusinessLinkedNotebooks",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.SavedSearch = Thrift.Struct.define("SavedSearch", {
      1 : {
        alias : "guid",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "name",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "query",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "format",
        type : Thrift.Type.I32
      },
      5 : {
        alias : "updateSequenceNum",
        type : Thrift.Type.I32
      },
      6 : {
        alias : "scope",
        type : Thrift.Type.STRUCT,
        def : req.exports.SavedSearchScope
      }
    });
    req.exports.Ad = Thrift.Struct.define("Ad", {
      1 : {
        alias : "id",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "width",
        type : Thrift.Type.I16
      },
      3 : {
        alias : "height",
        type : Thrift.Type.I16
      },
      4 : {
        alias : "advertiserName",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "imageUrl",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "destinationUrl",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "displaySeconds",
        type : Thrift.Type.I16
      },
      8 : {
        alias : "score",
        type : Thrift.Type.DOUBLE
      },
      9 : {
        alias : "image",
        type : Thrift.Type.BINARY
      },
      10 : {
        alias : "imageMime",
        type : Thrift.Type.STRING
      },
      11 : {
        alias : "html",
        type : Thrift.Type.STRING
      },
      12 : {
        alias : "displayFrequency",
        type : Thrift.Type.DOUBLE
      },
      13 : {
        alias : "openInTrunk",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.SharedNotebookRecipientSettings = Thrift.Struct.define("SharedNotebookRecipientSettings", {
      1 : {
        alias : "reminderNotifyEmail",
        type : Thrift.Type.BOOL
      },
      2 : {
        alias : "reminderNotifyInApp",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.NotebookRecipientSettings = Thrift.Struct.define("NotebookRecipientSettings", {
      1 : {
        alias : "reminderNotifyEmail",
        type : Thrift.Type.BOOL
      },
      2 : {
        alias : "reminderNotifyInApp",
        type : Thrift.Type.BOOL
      },
      3 : {
        alias : "inMyList",
        type : Thrift.Type.BOOL
      },
      4 : {
        alias : "stack",
        type : Thrift.Type.STRING
      }
    });
    req.exports.SharedNotebook = Thrift.Struct.define("SharedNotebook", {
      1 : {
        alias : "id",
        type : Thrift.Type.I64
      },
      2 : {
        alias : "userId",
        type : Thrift.Type.I32
      },
      3 : {
        alias : "notebookGuid",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "email",
        type : Thrift.Type.STRING
      },
      18 : {
        alias : "recipientIdentityId",
        type : Thrift.Type.I64
      },
      5 : {
        alias : "notebookModifiable",
        type : Thrift.Type.BOOL
      },
      7 : {
        alias : "serviceCreated",
        type : Thrift.Type.I64
      },
      10 : {
        alias : "serviceUpdated",
        type : Thrift.Type.I64
      },
      8 : {
        alias : "globalId",
        type : Thrift.Type.STRING
      },
      9 : {
        alias : "username",
        type : Thrift.Type.STRING
      },
      11 : {
        alias : "privilege",
        type : Thrift.Type.I32
      },
      13 : {
        alias : "recipientSettings",
        type : Thrift.Type.STRUCT,
        def : req.exports.SharedNotebookRecipientSettings
      },
      14 : {
        alias : "sharerUserId",
        type : Thrift.Type.I32
      },
      15 : {
        alias : "recipientUsername",
        type : Thrift.Type.STRING
      },
      17 : {
        alias : "recipientUserId",
        type : Thrift.Type.I32
      },
      16 : {
        alias : "serviceAssigned",
        type : Thrift.Type.I64
      }
    });
    req.exports.NotebookRestrictions = Thrift.Struct.define("NotebookRestrictions", {
      1 : {
        alias : "noReadNotes",
        type : Thrift.Type.BOOL
      },
      2 : {
        alias : "noCreateNotes",
        type : Thrift.Type.BOOL
      },
      3 : {
        alias : "noUpdateNotes",
        type : Thrift.Type.BOOL
      },
      4 : {
        alias : "noExpungeNotes",
        type : Thrift.Type.BOOL
      },
      5 : {
        alias : "noShareNotes",
        type : Thrift.Type.BOOL
      },
      6 : {
        alias : "noEmailNotes",
        type : Thrift.Type.BOOL
      },
      7 : {
        alias : "noSendMessageToRecipients",
        type : Thrift.Type.BOOL
      },
      8 : {
        alias : "noUpdateNotebook",
        type : Thrift.Type.BOOL
      },
      9 : {
        alias : "noExpungeNotebook",
        type : Thrift.Type.BOOL
      },
      10 : {
        alias : "noSetDefaultNotebook",
        type : Thrift.Type.BOOL
      },
      11 : {
        alias : "noSetNotebookStack",
        type : Thrift.Type.BOOL
      },
      12 : {
        alias : "noPublishToPublic",
        type : Thrift.Type.BOOL
      },
      13 : {
        alias : "noPublishToBusinessLibrary",
        type : Thrift.Type.BOOL
      },
      14 : {
        alias : "noCreateTags",
        type : Thrift.Type.BOOL
      },
      15 : {
        alias : "noUpdateTags",
        type : Thrift.Type.BOOL
      },
      16 : {
        alias : "noExpungeTags",
        type : Thrift.Type.BOOL
      },
      17 : {
        alias : "noSetParentTag",
        type : Thrift.Type.BOOL
      },
      18 : {
        alias : "noCreateSharedNotebooks",
        type : Thrift.Type.BOOL
      },
      19 : {
        alias : "updateWhichSharedNotebookRestrictions",
        type : Thrift.Type.I32
      },
      20 : {
        alias : "expungeWhichSharedNotebookRestrictions",
        type : Thrift.Type.I32
      },
      21 : {
        alias : "noShareNotesWithBusiness",
        type : Thrift.Type.BOOL
      },
      22 : {
        alias : "noRenameNotebook",
        type : Thrift.Type.BOOL
      }
    });
    req.exports.Notebook = Thrift.Struct.define("Notebook", {
      1 : {
        alias : "guid",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "name",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "updateSequenceNum",
        type : Thrift.Type.I32
      },
      6 : {
        alias : "defaultNotebook",
        type : Thrift.Type.BOOL
      },
      7 : {
        alias : "serviceCreated",
        type : Thrift.Type.I64
      },
      8 : {
        alias : "serviceUpdated",
        type : Thrift.Type.I64
      },
      10 : {
        alias : "publishing",
        type : Thrift.Type.STRUCT,
        def : req.exports.Publishing
      },
      11 : {
        alias : "published",
        type : Thrift.Type.BOOL
      },
      12 : {
        alias : "stack",
        type : Thrift.Type.STRING
      },
      13 : {
        alias : "sharedNotebookIds",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.I64)
      },
      14 : {
        alias : "sharedNotebooks",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRUCT, req.exports.SharedNotebook)
      },
      15 : {
        alias : "businessNotebook",
        type : Thrift.Type.STRUCT,
        def : req.exports.BusinessNotebook
      },
      16 : {
        alias : "contact",
        type : Thrift.Type.STRUCT,
        def : req.exports.User
      },
      17 : {
        alias : "restrictions",
        type : Thrift.Type.STRUCT,
        def : req.exports.NotebookRestrictions
      },
      18 : {
        alias : "recipientSettings",
        type : Thrift.Type.STRUCT,
        def : req.exports.NotebookRecipientSettings
      }
    });
    req.exports.LinkedNotebook = Thrift.Struct.define("LinkedNotebook", {
      2 : {
        alias : "shareName",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "username",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "shardId",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "sharedNotebookGlobalId",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "uri",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "guid",
        type : Thrift.Type.STRING
      },
      8 : {
        alias : "updateSequenceNum",
        type : Thrift.Type.I32
      },
      9 : {
        alias : "noteStoreUrl",
        type : Thrift.Type.STRING
      },
      10 : {
        alias : "webApiUrlPrefix",
        type : Thrift.Type.STRING
      },
      11 : {
        alias : "stack",
        type : Thrift.Type.STRING
      },
      12 : {
        alias : "businessId",
        type : Thrift.Type.I32
      }
    });
    req.exports.NotebookDescriptor = Thrift.Struct.define("NotebookDescriptor", {
      1 : {
        alias : "guid",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "notebookDisplayName",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "contactName",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "hasSharedNotebook",
        type : Thrift.Type.BOOL
      },
      5 : {
        alias : "joinedUserCount",
        type : Thrift.Type.I32
      }
    });
    req.exports.UserProfile = Thrift.Struct.define("UserProfile", {
      1 : {
        alias : "id",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "name",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "email",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "username",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "attributes",
        type : Thrift.Type.STRUCT,
        def : req.exports.BusinessUserAttributes
      },
      6 : {
        alias : "joined",
        type : Thrift.Type.I64
      },
      7 : {
        alias : "photoLastUpdated",
        type : Thrift.Type.I64
      },
      8 : {
        alias : "photoUrl",
        type : Thrift.Type.STRING
      },
      9 : {
        alias : "role",
        type : Thrift.Type.I32
      }
    });
    req.exports.RelatedContentImage = Thrift.Struct.define("RelatedContentImage", {
      1 : {
        alias : "url",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "width",
        type : Thrift.Type.I32
      },
      3 : {
        alias : "height",
        type : Thrift.Type.I32
      },
      4 : {
        alias : "pixelRatio",
        type : Thrift.Type.DOUBLE
      },
      5 : {
        alias : "fileSize",
        type : Thrift.Type.I32
      }
    });
    req.exports.RelatedContent = Thrift.Struct.define("RelatedContent", {
      1 : {
        alias : "contentId",
        type : Thrift.Type.STRING
      },
      2 : {
        alias : "title",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "url",
        type : Thrift.Type.STRING
      },
      4 : {
        alias : "sourceId",
        type : Thrift.Type.STRING
      },
      5 : {
        alias : "sourceUrl",
        type : Thrift.Type.STRING
      },
      6 : {
        alias : "sourceFaviconUrl",
        type : Thrift.Type.STRING
      },
      7 : {
        alias : "sourceName",
        type : Thrift.Type.STRING
      },
      8 : {
        alias : "date",
        type : Thrift.Type.I64
      },
      9 : {
        alias : "teaser",
        type : Thrift.Type.STRING
      },
      10 : {
        alias : "thumbnails",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRUCT, req.exports.RelatedContentImage)
      },
      11 : {
        alias : "contentType",
        type : Thrift.Type.I32
      },
      12 : {
        alias : "accessType",
        type : Thrift.Type.I32
      },
      13 : {
        alias : "visibleUrl",
        type : Thrift.Type.STRING
      },
      14 : {
        alias : "clipUrl",
        type : Thrift.Type.STRING
      },
      15 : {
        alias : "contact",
        type : Thrift.Type.STRUCT,
        def : req.exports.Contact
      },
      16 : {
        alias : "authors",
        type : Thrift.Type.LIST,
        def : Thrift.List.define(Thrift.Type.STRING)
      }
    });
    req.exports.BusinessInvitation = Thrift.Struct.define("BusinessInvitation", {
      1 : {
        alias : "businessId",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "email",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "role",
        type : Thrift.Type.I32
      },
      4 : {
        alias : "status",
        type : Thrift.Type.I32
      },
      5 : {
        alias : "requesterId",
        type : Thrift.Type.I32
      },
      6 : {
        alias : "fromWorkChat",
        type : Thrift.Type.BOOL
      },
      7 : {
        alias : "created",
        type : Thrift.Type.I64
      }
    });
    req.exports.UserIdentity = Thrift.Struct.define("UserIdentity", {
      1 : {
        alias : "type",
        type : Thrift.Type.I32
      },
      2 : {
        alias : "stringIdentifier",
        type : Thrift.Type.STRING
      },
      3 : {
        alias : "longIdentifier",
        type : Thrift.Type.I64
      }
    });
  },
  58 : function(module, layer, $) {
    /**
     * @param {string} output
     * @return {undefined}
     */
    function Client(output) {
      /** @type {string} */
      this.output = output;
      /** @type {number} */
      this.seqid = 0;
    }
    /**
     * @param {!Object} service
     * @param {!Object} options
     * @param {?} Request
     * @return {undefined}
     */
    function test(service, options, Request) {
      var methodName;
      for (methodName in this.service = service, this.stransport = options, this.processor = new types.Processor, UserStore) {
        if (service[methodName]) {
          this.processor.addMethod(UserStore[methodName], service[methodName].bind(service));
        }
      }
      this.stransport.process = function(createTableSql, url, noop) {
        var request = new Request(createTableSql);
        var options = new Request(url);
        this.processor.process(request, options, noop);
      }.bind(this);
    }
    var types = $(18);
    var def = $(35);
    var self = $(56);
    var $cs = $(106);
    $(105);
    module.exports.UserSetting = {
      RECEIVE_REMINDER_EMAIL : 1,
      TIMEZONE : 2
    };
    module.exports.ShareRelationshipPrivilegeLevel = {
      READ_NOTEBOOK : 0,
      READ_NOTEBOOK_PLUS_ACTIVITY : 10,
      MODIFY_NOTEBOOK_PLUS_ACTIVITY : 20,
      FULL_ACCESS : 30
    };
    module.exports.SyncState = types.Struct.define("SyncState", {
      1 : {
        alias : "currentTime",
        type : types.Type.I64
      },
      2 : {
        alias : "fullSyncBefore",
        type : types.Type.I64
      },
      3 : {
        alias : "updateCount",
        type : types.Type.I32
      },
      4 : {
        alias : "uploaded",
        type : types.Type.I64
      },
      5 : {
        alias : "userLastUpdated",
        type : types.Type.I64
      },
      6 : {
        alias : "userMaxMessageEventId",
        type : types.Type.I64
      }
    });
    module.exports.SyncChunk = types.Struct.define("SyncChunk", {
      1 : {
        alias : "currentTime",
        type : types.Type.I64
      },
      2 : {
        alias : "chunkHighUSN",
        type : types.Type.I32
      },
      3 : {
        alias : "updateCount",
        type : types.Type.I32
      },
      4 : {
        alias : "notes",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Note)
      },
      5 : {
        alias : "notebooks",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Notebook)
      },
      6 : {
        alias : "tags",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Tag)
      },
      7 : {
        alias : "searches",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.SavedSearch)
      },
      8 : {
        alias : "resources",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Resource)
      },
      9 : {
        alias : "expungedNotes",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      10 : {
        alias : "expungedNotebooks",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      11 : {
        alias : "expungedTags",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      12 : {
        alias : "expungedSearches",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      13 : {
        alias : "linkedNotebooks",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.LinkedNotebook)
      },
      14 : {
        alias : "expungedLinkedNotebooks",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      }
    });
    module.exports.SyncChunkFilter = types.Struct.define("SyncChunkFilter", {
      1 : {
        alias : "includeNotes",
        type : types.Type.BOOL
      },
      2 : {
        alias : "includeNoteResources",
        type : types.Type.BOOL
      },
      3 : {
        alias : "includeNoteAttributes",
        type : types.Type.BOOL
      },
      4 : {
        alias : "includeNotebooks",
        type : types.Type.BOOL
      },
      5 : {
        alias : "includeTags",
        type : types.Type.BOOL
      },
      6 : {
        alias : "includeSearches",
        type : types.Type.BOOL
      },
      7 : {
        alias : "includeResources",
        type : types.Type.BOOL
      },
      8 : {
        alias : "includeLinkedNotebooks",
        type : types.Type.BOOL
      },
      9 : {
        alias : "includeExpunged",
        type : types.Type.BOOL
      },
      10 : {
        alias : "includeNoteApplicationDataFullMap",
        type : types.Type.BOOL
      },
      12 : {
        alias : "includeResourceApplicationDataFullMap",
        type : types.Type.BOOL
      },
      13 : {
        alias : "includeNoteResourceApplicationDataFullMap",
        type : types.Type.BOOL
      },
      17 : {
        alias : "includeSharedNotes",
        type : types.Type.BOOL
      },
      16 : {
        alias : "omitSharedNotebooks",
        type : types.Type.BOOL
      },
      11 : {
        alias : "requireNoteContentClass",
        type : types.Type.STRING
      },
      15 : {
        alias : "notebookGuids",
        type : types.Type.SET,
        def : types.Set.define(types.Type.STRING)
      }
    });
    module.exports.NoteFilter = types.Struct.define("NoteFilter", {
      1 : {
        alias : "order",
        type : types.Type.I32
      },
      2 : {
        alias : "ascending",
        type : types.Type.BOOL
      },
      3 : {
        alias : "words",
        type : types.Type.STRING
      },
      4 : {
        alias : "notebookGuid",
        type : types.Type.STRING
      },
      5 : {
        alias : "tagGuids",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      6 : {
        alias : "timeZone",
        type : types.Type.STRING
      },
      7 : {
        alias : "inactive",
        type : types.Type.BOOL
      },
      8 : {
        alias : "emphasized",
        type : types.Type.STRING
      },
      9 : {
        alias : "includeAllReadableNotebooks",
        type : types.Type.BOOL
      }
    });
    module.exports.NoteList = types.Struct.define("NoteList", {
      1 : {
        alias : "startIndex",
        type : types.Type.I32
      },
      2 : {
        alias : "totalNotes",
        type : types.Type.I32
      },
      3 : {
        alias : "notes",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Note)
      },
      4 : {
        alias : "stoppedWords",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      5 : {
        alias : "searchedWords",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      6 : {
        alias : "updateCount",
        type : types.Type.I32
      }
    });
    module.exports.NoteMetadata = types.Struct.define("NoteMetadata", {
      1 : {
        alias : "guid",
        type : types.Type.STRING
      },
      2 : {
        alias : "title",
        type : types.Type.STRING
      },
      5 : {
        alias : "contentLength",
        type : types.Type.I32
      },
      6 : {
        alias : "created",
        type : types.Type.I64
      },
      7 : {
        alias : "updated",
        type : types.Type.I64
      },
      8 : {
        alias : "deleted",
        type : types.Type.I64
      },
      10 : {
        alias : "updateSequenceNum",
        type : types.Type.I32
      },
      11 : {
        alias : "notebookGuid",
        type : types.Type.STRING
      },
      12 : {
        alias : "tagGuids",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      14 : {
        alias : "attributes",
        type : types.Type.STRUCT,
        def : self.NoteAttributes
      },
      20 : {
        alias : "largestResourceMime",
        type : types.Type.STRING
      },
      21 : {
        alias : "largestResourceSize",
        type : types.Type.I32
      }
    });
    module.exports.NotesMetadataList = types.Struct.define("NotesMetadataList", {
      1 : {
        alias : "startIndex",
        type : types.Type.I32
      },
      2 : {
        alias : "totalNotes",
        type : types.Type.I32
      },
      3 : {
        alias : "notes",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.NoteMetadata)
      },
      4 : {
        alias : "stoppedWords",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      5 : {
        alias : "searchedWords",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      6 : {
        alias : "updateCount",
        type : types.Type.I32
      }
    });
    module.exports.NotesMetadataResultSpec = types.Struct.define("NotesMetadataResultSpec", {
      2 : {
        alias : "includeTitle",
        type : types.Type.BOOL
      },
      5 : {
        alias : "includeContentLength",
        type : types.Type.BOOL
      },
      6 : {
        alias : "includeCreated",
        type : types.Type.BOOL
      },
      7 : {
        alias : "includeUpdated",
        type : types.Type.BOOL
      },
      8 : {
        alias : "includeDeleted",
        type : types.Type.BOOL
      },
      10 : {
        alias : "includeUpdateSequenceNum",
        type : types.Type.BOOL
      },
      11 : {
        alias : "includeNotebookGuid",
        type : types.Type.BOOL
      },
      12 : {
        alias : "includeTagGuids",
        type : types.Type.BOOL
      },
      14 : {
        alias : "includeAttributes",
        type : types.Type.BOOL
      },
      20 : {
        alias : "includeLargestResourceMime",
        type : types.Type.BOOL
      },
      21 : {
        alias : "includeLargestResourceSize",
        type : types.Type.BOOL
      }
    });
    module.exports.NoteCollectionCounts = types.Struct.define("NoteCollectionCounts", {
      1 : {
        alias : "notebookCounts",
        type : types.Type.MAP,
        def : types.Map.define(types.Type.STRING, types.Type.I32)
      },
      2 : {
        alias : "tagCounts",
        type : types.Type.MAP,
        def : types.Map.define(types.Type.STRING, types.Type.I32)
      },
      3 : {
        alias : "trashCount",
        type : types.Type.I32
      }
    });
    module.exports.NoteResultSpec = types.Struct.define("NoteResultSpec", {
      1 : {
        alias : "includeContent",
        type : types.Type.BOOL
      },
      2 : {
        alias : "includeResourcesData",
        type : types.Type.BOOL
      },
      3 : {
        alias : "includeResourcesRecognition",
        type : types.Type.BOOL
      },
      4 : {
        alias : "includeResourcesAlternateData",
        type : types.Type.BOOL
      },
      5 : {
        alias : "includeSharedNotes",
        type : types.Type.BOOL
      },
      6 : {
        alias : "includeNoteAppDataValues",
        type : types.Type.BOOL
      },
      7 : {
        alias : "includeResourceAppDataValues",
        type : types.Type.BOOL
      },
      8 : {
        alias : "includeAccountLimits",
        type : types.Type.BOOL
      }
    });
    module.exports.NoteEmailParameters = types.Struct.define("NoteEmailParameters", {
      1 : {
        alias : "guid",
        type : types.Type.STRING
      },
      2 : {
        alias : "note",
        type : types.Type.STRUCT,
        def : self.Note
      },
      3 : {
        alias : "toAddresses",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      4 : {
        alias : "ccAddresses",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRING)
      },
      5 : {
        alias : "subject",
        type : types.Type.STRING
      },
      6 : {
        alias : "message",
        type : types.Type.STRING
      }
    });
    module.exports.NoteVersionId = types.Struct.define("NoteVersionId", {
      1 : {
        alias : "updateSequenceNum",
        type : types.Type.I32
      },
      2 : {
        alias : "updated",
        type : types.Type.I64
      },
      3 : {
        alias : "saved",
        type : types.Type.I64
      },
      4 : {
        alias : "title",
        type : types.Type.STRING
      },
      5 : {
        alias : "lastEditorId",
        type : types.Type.I32
      }
    });
    module.exports.RelatedQuery = types.Struct.define("RelatedQuery", {
      1 : {
        alias : "noteGuid",
        type : types.Type.STRING
      },
      2 : {
        alias : "plainText",
        type : types.Type.STRING
      },
      3 : {
        alias : "filter",
        type : types.Type.STRUCT,
        def : module.exports.NoteFilter
      },
      4 : {
        alias : "referenceUri",
        type : types.Type.STRING
      },
      5 : {
        alias : "context",
        type : types.Type.STRING
      },
      6 : {
        alias : "cacheKey",
        type : types.Type.STRING
      }
    });
    module.exports.RelatedResult = types.Struct.define("RelatedResult", {
      1 : {
        alias : "notes",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Note)
      },
      2 : {
        alias : "notebooks",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Notebook)
      },
      3 : {
        alias : "tags",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Tag)
      },
      4 : {
        alias : "containingNotebooks",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.NotebookDescriptor)
      },
      5 : {
        alias : "debugInfo",
        type : types.Type.STRING
      },
      6 : {
        alias : "experts",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.UserProfile)
      },
      7 : {
        alias : "relatedContent",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.RelatedContent)
      },
      8 : {
        alias : "cacheKey",
        type : types.Type.STRING
      },
      9 : {
        alias : "cacheExpires",
        type : types.Type.I32
      }
    });
    module.exports.RelatedResultSpec = types.Struct.define("RelatedResultSpec", {
      1 : {
        alias : "maxNotes",
        type : types.Type.I32
      },
      2 : {
        alias : "maxNotebooks",
        type : types.Type.I32
      },
      3 : {
        alias : "maxTags",
        type : types.Type.I32
      },
      4 : {
        alias : "writableNotebooksOnly",
        type : types.Type.BOOL
      },
      5 : {
        alias : "includeContainingNotebooks",
        type : types.Type.BOOL
      },
      6 : {
        alias : "includeDebugInfo",
        type : types.Type.BOOL
      },
      7 : {
        alias : "maxExperts",
        type : types.Type.I32
      },
      8 : {
        alias : "maxRelatedContent",
        type : types.Type.I32
      },
      9 : {
        alias : "relatedContentTypes",
        type : types.Type.SET,
        def : types.Set.define(types.Type.I32)
      }
    });
    module.exports.UpdateNoteIfUsnMatchesResult = types.Struct.define("UpdateNoteIfUsnMatchesResult", {
      1 : {
        alias : "note",
        type : types.Type.STRUCT,
        def : self.Note
      },
      2 : {
        alias : "updated",
        type : types.Type.BOOL
      }
    });
    module.exports.ShareRelationshipRestrictions = types.Struct.define("ShareRelationshipRestrictions", {
      1 : {
        alias : "noSetReadOnly",
        type : types.Type.BOOL
      },
      2 : {
        alias : "noSetReadPlusActivity",
        type : types.Type.BOOL
      },
      3 : {
        alias : "noSetModify",
        type : types.Type.BOOL
      },
      4 : {
        alias : "noSetFullAccess",
        type : types.Type.BOOL
      }
    });
    module.exports.InvitationShareRelationship = types.Struct.define("InvitationShareRelationship", {
      1 : {
        alias : "displayName",
        type : types.Type.STRING
      },
      2 : {
        alias : "recipientUserIdentity",
        type : types.Type.STRUCT,
        def : self.UserIdentity
      },
      3 : {
        alias : "privilege",
        type : types.Type.I32
      },
      5 : {
        alias : "sharerUserId",
        type : types.Type.I32
      }
    });
    module.exports.MemberShareRelationship = types.Struct.define("MemberShareRelationship", {
      1 : {
        alias : "displayName",
        type : types.Type.STRING
      },
      2 : {
        alias : "recipientUserId",
        type : types.Type.I32
      },
      3 : {
        alias : "bestPrivilege",
        type : types.Type.I32
      },
      4 : {
        alias : "individualPrivilege",
        type : types.Type.I32
      },
      5 : {
        alias : "restrictions",
        type : types.Type.STRUCT,
        def : module.exports.ShareRelationshipRestrictions
      },
      6 : {
        alias : "sharerUserId",
        type : types.Type.I32
      }
    });
    module.exports.ShareRelationships = types.Struct.define("ShareRelationships", {
      1 : {
        alias : "invitations",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.InvitationShareRelationship)
      },
      2 : {
        alias : "memberships",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.MemberShareRelationship)
      },
      3 : {
        alias : "invitationRestrictions",
        type : types.Type.STRUCT,
        def : module.exports.ShareRelationshipRestrictions
      }
    });
    module.exports.ManageNotebookSharesParameters = types.Struct.define("ManageNotebookSharesParameters", {
      1 : {
        alias : "notebookGuid",
        type : types.Type.STRING
      },
      2 : {
        alias : "inviteMessage",
        type : types.Type.STRING
      },
      3 : {
        alias : "membershipsToUpdate",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.MemberShareRelationship)
      },
      4 : {
        alias : "invitationsToCreateOrUpdate",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.InvitationShareRelationship)
      },
      5 : {
        alias : "unshares",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.UserIdentity)
      }
    });
    module.exports.ManageNotebookSharesError = types.Struct.define("ManageNotebookSharesError", {
      1 : {
        alias : "userIdentity",
        type : types.Type.STRUCT,
        def : self.UserIdentity
      },
      2 : {
        alias : "userException",
        type : types.Type.EXCEPTION,
        def : $cs.EDAMUserException
      },
      3 : {
        alias : "notFoundException",
        type : types.Type.EXCEPTION,
        def : $cs.EDAMNotFoundException
      }
    });
    module.exports.ManageNotebookSharesResult = types.Struct.define("ManageNotebookSharesResult", {
      1 : {
        alias : "errors",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.ManageNotebookSharesError)
      }
    });
    module.exports.SharedNoteTemplate = types.Struct.define("SharedNoteTemplate", {
      1 : {
        alias : "noteGuid",
        type : types.Type.STRING
      },
      4 : {
        alias : "recipientThreadId",
        type : types.Type.I64
      },
      2 : {
        alias : "recipientContacts",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Contact)
      },
      3 : {
        alias : "privilege",
        type : types.Type.I32
      }
    });
    module.exports.NotebookShareTemplate = types.Struct.define("NotebookShareTemplate", {
      1 : {
        alias : "notebookGuid",
        type : types.Type.STRING
      },
      4 : {
        alias : "recipientThreadId",
        type : types.Type.I64
      },
      2 : {
        alias : "recipientContacts",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.Contact)
      },
      3 : {
        alias : "privilege",
        type : types.Type.I32
      }
    });
    module.exports.CreateOrUpdateNotebookSharesResult = types.Struct.define("CreateOrUpdateNotebookSharesResult", {
      1 : {
        alias : "updateSequenceNum",
        type : types.Type.I32
      },
      2 : {
        alias : "matchingShares",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, self.SharedNotebook)
      }
    });
    module.exports.NoteShareRelationshipRestrictions = types.Struct.define("NoteShareRelationshipRestrictions", {
      1 : {
        alias : "noSetReadNote",
        type : types.Type.BOOL
      },
      2 : {
        alias : "noSetModifyNote",
        type : types.Type.BOOL
      },
      3 : {
        alias : "noSetFullAccess",
        type : types.Type.BOOL
      }
    });
    module.exports.NoteMemberShareRelationship = types.Struct.define("NoteMemberShareRelationship", {
      1 : {
        alias : "displayName",
        type : types.Type.STRING
      },
      2 : {
        alias : "recipientUserId",
        type : types.Type.I32
      },
      3 : {
        alias : "privilege",
        type : types.Type.I32
      },
      4 : {
        alias : "restrictions",
        type : types.Type.STRUCT,
        def : module.exports.NoteShareRelationshipRestrictions
      },
      5 : {
        alias : "sharerUserId",
        type : types.Type.I32
      }
    });
    module.exports.NoteInvitationShareRelationship = types.Struct.define("NoteInvitationShareRelationship", {
      1 : {
        alias : "displayName",
        type : types.Type.STRING
      },
      2 : {
        alias : "recipientIdentityId",
        type : types.Type.I64
      },
      3 : {
        alias : "privilege",
        type : types.Type.I32
      },
      5 : {
        alias : "sharerUserId",
        type : types.Type.I32
      }
    });
    module.exports.NoteShareRelationships = types.Struct.define("NoteShareRelationships", {
      1 : {
        alias : "invitations",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.NoteInvitationShareRelationship)
      },
      2 : {
        alias : "memberships",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.NoteMemberShareRelationship)
      },
      3 : {
        alias : "invitationRestrictions",
        type : types.Type.STRUCT,
        def : module.exports.NoteShareRelationshipRestrictions
      }
    });
    module.exports.ManageNoteSharesParameters = types.Struct.define("ManageNoteSharesParameters", {
      1 : {
        alias : "noteGuid",
        type : types.Type.STRING
      },
      2 : {
        alias : "membershipsToUpdate",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.NoteMemberShareRelationship)
      },
      3 : {
        alias : "invitationsToUpdate",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.NoteInvitationShareRelationship)
      },
      4 : {
        alias : "membershipsToUnshare",
        type : types.Type.LIST,
        def : types.List.define(types.Type.I32)
      },
      5 : {
        alias : "invitationsToUnshare",
        type : types.Type.LIST,
        def : types.List.define(types.Type.I64)
      }
    });
    module.exports.ManageNoteSharesError = types.Struct.define("ManageNoteSharesError", {
      1 : {
        alias : "identityID",
        type : types.Type.I64
      },
      2 : {
        alias : "userID",
        type : types.Type.I32
      },
      3 : {
        alias : "userException",
        type : types.Type.EXCEPTION,
        def : $cs.EDAMUserException
      },
      4 : {
        alias : "notFoundException",
        type : types.Type.EXCEPTION,
        def : $cs.EDAMNotFoundException
      }
    });
    module.exports.ManageNoteSharesResult = types.Struct.define("ManageNoteSharesResult", {
      1 : {
        alias : "errors",
        type : types.Type.LIST,
        def : types.List.define(types.Type.STRUCT, module.exports.ManageNoteSharesError)
      }
    });
    var UserStore = module.exports.NoteStore = {};
    UserStore.getSyncState = types.Method.define({
      alias : "getSyncState",
      args : types.Struct.define("getSyncStateArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("getSyncStateResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.SyncState
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getFilteredSyncChunk = types.Method.define({
      alias : "getFilteredSyncChunk",
      args : types.Struct.define("getFilteredSyncChunkArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "afterUSN",
          type : types.Type.I32,
          index : 1
        },
        3 : {
          alias : "maxEntries",
          type : types.Type.I32,
          index : 2
        },
        4 : {
          alias : "filter",
          type : types.Type.STRUCT,
          def : module.exports.SyncChunkFilter,
          index : 3
        }
      }),
      result : types.Struct.define("getFilteredSyncChunkResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.SyncChunk
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getLinkedNotebookSyncState = types.Method.define({
      alias : "getLinkedNotebookSyncState",
      args : types.Struct.define("getLinkedNotebookSyncStateArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "linkedNotebook",
          type : types.Type.STRUCT,
          def : self.LinkedNotebook,
          index : 1
        }
      }),
      result : types.Struct.define("getLinkedNotebookSyncStateResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.SyncState
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getLinkedNotebookSyncChunk = types.Method.define({
      alias : "getLinkedNotebookSyncChunk",
      args : types.Struct.define("getLinkedNotebookSyncChunkArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "linkedNotebook",
          type : types.Type.STRUCT,
          def : self.LinkedNotebook,
          index : 1
        },
        3 : {
          alias : "afterUSN",
          type : types.Type.I32,
          index : 2
        },
        4 : {
          alias : "maxEntries",
          type : types.Type.I32,
          index : 3
        },
        5 : {
          alias : "fullSyncOnly",
          type : types.Type.BOOL,
          index : 4
        }
      }),
      result : types.Struct.define("getLinkedNotebookSyncChunkResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.SyncChunk
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.listNotebooks = types.Method.define({
      alias : "listNotebooks",
      args : types.Struct.define("listNotebooksArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("listNotebooksResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, self.Notebook)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.listAccessibleBusinessNotebooks = types.Method.define({
      alias : "listAccessibleBusinessNotebooks",
      args : types.Struct.define("listAccessibleBusinessNotebooksArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("listAccessibleBusinessNotebooksResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, self.Notebook)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getNotebook = types.Method.define({
      alias : "getNotebook",
      args : types.Struct.define("getNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Notebook
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getDefaultNotebook = types.Method.define({
      alias : "getDefaultNotebook",
      args : types.Struct.define("getDefaultNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("getDefaultNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Notebook
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.createNotebook = types.Method.define({
      alias : "createNotebook",
      args : types.Struct.define("createNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "notebook",
          type : types.Type.STRUCT,
          def : self.Notebook,
          index : 1
        }
      }),
      result : types.Struct.define("createNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Notebook
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.updateNotebook = types.Method.define({
      alias : "updateNotebook",
      args : types.Struct.define("updateNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "notebook",
          type : types.Type.STRUCT,
          def : self.Notebook,
          index : 1
        }
      }),
      result : types.Struct.define("updateNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.expungeNotebook = types.Method.define({
      alias : "expungeNotebook",
      args : types.Struct.define("expungeNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("expungeNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.listTags = types.Method.define({
      alias : "listTags",
      args : types.Struct.define("listTagsArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("listTagsResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, self.Tag)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.listTagsByNotebook = types.Method.define({
      alias : "listTagsByNotebook",
      args : types.Struct.define("listTagsByNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "notebookGuid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("listTagsByNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, self.Tag)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getTag = types.Method.define({
      alias : "getTag",
      args : types.Struct.define("getTagArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getTagResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Tag
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.createTag = types.Method.define({
      alias : "createTag",
      args : types.Struct.define("createTagArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "tag",
          type : types.Type.STRUCT,
          def : self.Tag,
          index : 1
        }
      }),
      result : types.Struct.define("createTagResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Tag
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.updateTag = types.Method.define({
      alias : "updateTag",
      args : types.Struct.define("updateTagArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "tag",
          type : types.Type.STRUCT,
          def : self.Tag,
          index : 1
        }
      }),
      result : types.Struct.define("updateTagResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.untagAll = types.Method.define({
      alias : "untagAll",
      args : types.Struct.define("untagAllArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("untagAllResult", {
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.expungeTag = types.Method.define({
      alias : "expungeTag",
      args : types.Struct.define("expungeTagArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("expungeTagResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.listSearches = types.Method.define({
      alias : "listSearches",
      args : types.Struct.define("listSearchesArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("listSearchesResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, self.SavedSearch)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getSearch = types.Method.define({
      alias : "getSearch",
      args : types.Struct.define("getSearchArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getSearchResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.SavedSearch
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.createSearch = types.Method.define({
      alias : "createSearch",
      args : types.Struct.define("createSearchArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "search",
          type : types.Type.STRUCT,
          def : self.SavedSearch,
          index : 1
        }
      }),
      result : types.Struct.define("createSearchResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.SavedSearch
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.updateSearch = types.Method.define({
      alias : "updateSearch",
      args : types.Struct.define("updateSearchArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "search",
          type : types.Type.STRUCT,
          def : self.SavedSearch,
          index : 1
        }
      }),
      result : types.Struct.define("updateSearchResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.expungeSearch = types.Method.define({
      alias : "expungeSearch",
      args : types.Struct.define("expungeSearchArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("expungeSearchResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.findNoteOffset = types.Method.define({
      alias : "findNoteOffset",
      args : types.Struct.define("findNoteOffsetArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "filter",
          type : types.Type.STRUCT,
          def : module.exports.NoteFilter,
          index : 1
        },
        3 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("findNoteOffsetResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.findNotesMetadata = types.Method.define({
      alias : "findNotesMetadata",
      args : types.Struct.define("findNotesMetadataArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "filter",
          type : types.Type.STRUCT,
          def : module.exports.NoteFilter,
          index : 1
        },
        3 : {
          alias : "offset",
          type : types.Type.I32,
          index : 2
        },
        4 : {
          alias : "maxNotes",
          type : types.Type.I32,
          index : 3
        },
        5 : {
          alias : "resultSpec",
          type : types.Type.STRUCT,
          def : module.exports.NotesMetadataResultSpec,
          index : 4
        }
      }),
      result : types.Struct.define("findNotesMetadataResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.NotesMetadataList
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.findNoteCounts = types.Method.define({
      alias : "findNoteCounts",
      args : types.Struct.define("findNoteCountsArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "filter",
          type : types.Type.STRUCT,
          def : module.exports.NoteFilter,
          index : 1
        },
        3 : {
          alias : "withTrash",
          type : types.Type.BOOL,
          index : 2
        }
      }),
      result : types.Struct.define("findNoteCountsResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.NoteCollectionCounts
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNoteWithResultSpec = types.Method.define({
      alias : "getNoteWithResultSpec",
      args : types.Struct.define("getNoteWithResultSpecArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "resultSpec",
          type : types.Type.STRUCT,
          def : module.exports.NoteResultSpec,
          index : 2
        }
      }),
      result : types.Struct.define("getNoteWithResultSpecResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Note
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNote = types.Method.define({
      alias : "getNote",
      args : types.Struct.define("getNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "withContent",
          type : types.Type.BOOL,
          index : 2
        },
        4 : {
          alias : "withResourcesData",
          type : types.Type.BOOL,
          index : 3
        },
        5 : {
          alias : "withResourcesRecognition",
          type : types.Type.BOOL,
          index : 4
        },
        6 : {
          alias : "withResourcesAlternateData",
          type : types.Type.BOOL,
          index : 5
        }
      }),
      result : types.Struct.define("getNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Note
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNoteApplicationData = types.Method.define({
      alias : "getNoteApplicationData",
      args : types.Struct.define("getNoteApplicationDataArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getNoteApplicationDataResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.LazyMap
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNoteApplicationDataEntry = types.Method.define({
      alias : "getNoteApplicationDataEntry",
      args : types.Struct.define("getNoteApplicationDataEntryArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "key",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("getNoteApplicationDataEntryResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRING
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.setNoteApplicationDataEntry = types.Method.define({
      alias : "setNoteApplicationDataEntry",
      args : types.Struct.define("setNoteApplicationDataEntryArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "key",
          type : types.Type.STRING,
          index : 2
        },
        4 : {
          alias : "value",
          type : types.Type.STRING,
          index : 3
        }
      }),
      result : types.Struct.define("setNoteApplicationDataEntryResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.unsetNoteApplicationDataEntry = types.Method.define({
      alias : "unsetNoteApplicationDataEntry",
      args : types.Struct.define("unsetNoteApplicationDataEntryArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "key",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("unsetNoteApplicationDataEntryResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNoteContent = types.Method.define({
      alias : "getNoteContent",
      args : types.Struct.define("getNoteContentArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getNoteContentResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRING
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNoteSearchText = types.Method.define({
      alias : "getNoteSearchText",
      args : types.Struct.define("getNoteSearchTextArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "noteOnly",
          type : types.Type.BOOL,
          index : 2
        },
        4 : {
          alias : "tokenizeForIndexing",
          type : types.Type.BOOL,
          index : 3
        }
      }),
      result : types.Struct.define("getNoteSearchTextResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRING
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceSearchText = types.Method.define({
      alias : "getResourceSearchText",
      args : types.Struct.define("getResourceSearchTextArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getResourceSearchTextResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRING
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNoteTagNames = types.Method.define({
      alias : "getNoteTagNames",
      args : types.Struct.define("getNoteTagNamesArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getNoteTagNamesResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRING)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.createNote = types.Method.define({
      alias : "createNote",
      args : types.Struct.define("createNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "note",
          type : types.Type.STRUCT,
          def : self.Note,
          index : 1
        }
      }),
      result : types.Struct.define("createNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Note
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.updateNote = types.Method.define({
      alias : "updateNote",
      args : types.Struct.define("updateNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "note",
          type : types.Type.STRUCT,
          def : self.Note,
          index : 1
        }
      }),
      result : types.Struct.define("updateNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Note
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.deleteNote = types.Method.define({
      alias : "deleteNote",
      args : types.Struct.define("deleteNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("deleteNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.expungeNote = types.Method.define({
      alias : "expungeNote",
      args : types.Struct.define("expungeNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("expungeNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.copyNote = types.Method.define({
      alias : "copyNote",
      args : types.Struct.define("copyNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "noteGuid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "toNotebookGuid",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("copyNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Note
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.listNoteVersions = types.Method.define({
      alias : "listNoteVersions",
      args : types.Struct.define("listNoteVersionsArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "noteGuid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("listNoteVersionsResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, module.exports.NoteVersionId)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getNoteVersion = types.Method.define({
      alias : "getNoteVersion",
      args : types.Struct.define("getNoteVersionArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "noteGuid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "updateSequenceNum",
          type : types.Type.I32,
          index : 2
        },
        4 : {
          alias : "withResourcesData",
          type : types.Type.BOOL,
          index : 3
        },
        5 : {
          alias : "withResourcesRecognition",
          type : types.Type.BOOL,
          index : 4
        },
        6 : {
          alias : "withResourcesAlternateData",
          type : types.Type.BOOL,
          index : 5
        }
      }),
      result : types.Struct.define("getNoteVersionResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Note
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResource = types.Method.define({
      alias : "getResource",
      args : types.Struct.define("getResourceArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "withData",
          type : types.Type.BOOL,
          index : 2
        },
        4 : {
          alias : "withRecognition",
          type : types.Type.BOOL,
          index : 3
        },
        5 : {
          alias : "withAttributes",
          type : types.Type.BOOL,
          index : 4
        },
        6 : {
          alias : "withAlternateData",
          type : types.Type.BOOL,
          index : 5
        }
      }),
      result : types.Struct.define("getResourceResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Resource
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceApplicationData = types.Method.define({
      alias : "getResourceApplicationData",
      args : types.Struct.define("getResourceApplicationDataArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getResourceApplicationDataResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.LazyMap
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceApplicationDataEntry = types.Method.define({
      alias : "getResourceApplicationDataEntry",
      args : types.Struct.define("getResourceApplicationDataEntryArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "key",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("getResourceApplicationDataEntryResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRING
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.setResourceApplicationDataEntry = types.Method.define({
      alias : "setResourceApplicationDataEntry",
      args : types.Struct.define("setResourceApplicationDataEntryArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "key",
          type : types.Type.STRING,
          index : 2
        },
        4 : {
          alias : "value",
          type : types.Type.STRING,
          index : 3
        }
      }),
      result : types.Struct.define("setResourceApplicationDataEntryResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.unsetResourceApplicationDataEntry = types.Method.define({
      alias : "unsetResourceApplicationDataEntry",
      args : types.Struct.define("unsetResourceApplicationDataEntryArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "key",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("unsetResourceApplicationDataEntryResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.updateResource = types.Method.define({
      alias : "updateResource",
      args : types.Struct.define("updateResourceArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "resource",
          type : types.Type.STRUCT,
          def : self.Resource,
          index : 1
        }
      }),
      result : types.Struct.define("updateResourceResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceData = types.Method.define({
      alias : "getResourceData",
      args : types.Struct.define("getResourceDataArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getResourceDataResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.BINARY
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceByHash = types.Method.define({
      alias : "getResourceByHash",
      args : types.Struct.define("getResourceByHashArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "noteGuid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "contentHash",
          type : types.Type.BINARY,
          index : 2
        },
        4 : {
          alias : "withData",
          type : types.Type.BOOL,
          index : 3
        },
        5 : {
          alias : "withRecognition",
          type : types.Type.BOOL,
          index : 4
        },
        6 : {
          alias : "withAlternateData",
          type : types.Type.BOOL,
          index : 5
        }
      }),
      result : types.Struct.define("getResourceByHashResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Resource
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceRecognition = types.Method.define({
      alias : "getResourceRecognition",
      args : types.Struct.define("getResourceRecognitionArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getResourceRecognitionResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.BINARY
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceAlternateData = types.Method.define({
      alias : "getResourceAlternateData",
      args : types.Struct.define("getResourceAlternateDataArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getResourceAlternateDataResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.BINARY
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getResourceAttributes = types.Method.define({
      alias : "getResourceAttributes",
      args : types.Struct.define("getResourceAttributesArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getResourceAttributesResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.ResourceAttributes
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.getPublicNotebook = types.Method.define({
      alias : "getPublicNotebook",
      args : types.Struct.define("getPublicNotebookArgs", {
        1 : {
          alias : "userId",
          type : types.Type.I32,
          index : 0
        },
        2 : {
          alias : "publicUri",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getPublicNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Notebook
        },
        1 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.shareNotebook = types.Method.define({
      alias : "shareNotebook",
      args : types.Struct.define("shareNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "sharedNotebook",
          type : types.Type.STRUCT,
          def : self.SharedNotebook,
          index : 1
        },
        3 : {
          alias : "message",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("shareNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.SharedNotebook
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.createOrUpdateNotebookShares = types.Method.define({
      alias : "createOrUpdateNotebookShares",
      args : types.Struct.define("createOrUpdateNotebookSharesArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "shareTemplate",
          type : types.Type.STRUCT,
          def : module.exports.NotebookShareTemplate,
          index : 1
        }
      }),
      result : types.Struct.define("createOrUpdateNotebookSharesResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.CreateOrUpdateNotebookSharesResult
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        4 : {
          alias : "invalidContactsException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMInvalidContactsException
        }
      })
    });
    UserStore.updateSharedNotebook = types.Method.define({
      alias : "updateSharedNotebook",
      args : types.Struct.define("updateSharedNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "sharedNotebook",
          type : types.Type.STRUCT,
          def : self.SharedNotebook,
          index : 1
        }
      }),
      result : types.Struct.define("updateSharedNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.setNotebookRecipientSettings = types.Method.define({
      alias : "setNotebookRecipientSettings",
      args : types.Struct.define("setNotebookRecipientSettingsArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "notebookGuid",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "recipientSettings",
          type : types.Type.STRUCT,
          def : self.NotebookRecipientSettings,
          index : 2
        }
      }),
      result : types.Struct.define("setNotebookRecipientSettingsResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.Notebook
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.listSharedNotebooks = types.Method.define({
      alias : "listSharedNotebooks",
      args : types.Struct.define("listSharedNotebooksArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("listSharedNotebooksResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, self.SharedNotebook)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.createLinkedNotebook = types.Method.define({
      alias : "createLinkedNotebook",
      args : types.Struct.define("createLinkedNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "linkedNotebook",
          type : types.Type.STRUCT,
          def : self.LinkedNotebook,
          index : 1
        }
      }),
      result : types.Struct.define("createLinkedNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.LinkedNotebook
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.updateLinkedNotebook = types.Method.define({
      alias : "updateLinkedNotebook",
      args : types.Struct.define("updateLinkedNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "linkedNotebook",
          type : types.Type.STRUCT,
          def : self.LinkedNotebook,
          index : 1
        }
      }),
      result : types.Struct.define("updateLinkedNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.listLinkedNotebooks = types.Method.define({
      alias : "listLinkedNotebooks",
      args : types.Struct.define("listLinkedNotebooksArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("listLinkedNotebooksResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.LIST,
          def : types.List.define(types.Type.STRUCT, self.LinkedNotebook)
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.expungeLinkedNotebook = types.Method.define({
      alias : "expungeLinkedNotebook",
      args : types.Struct.define("expungeLinkedNotebookArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("expungeLinkedNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.I32
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.authenticateToSharedNotebook = types.Method.define({
      alias : "authenticateToSharedNotebook",
      args : types.Struct.define("authenticateToSharedNotebookArgs", {
        1 : {
          alias : "shareKeyOrGlobalId",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("authenticateToSharedNotebookResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : def.AuthenticationResult
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getSharedNotebookByAuth = types.Method.define({
      alias : "getSharedNotebookByAuth",
      args : types.Struct.define("getSharedNotebookByAuthArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        }
      }),
      result : types.Struct.define("getSharedNotebookByAuthResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : self.SharedNotebook
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.emailNote = types.Method.define({
      alias : "emailNote",
      args : types.Struct.define("emailNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "parameters",
          type : types.Type.STRUCT,
          def : module.exports.NoteEmailParameters,
          index : 1
        }
      }),
      result : types.Struct.define("emailNoteResult", {
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.shareNote = types.Method.define({
      alias : "shareNote",
      args : types.Struct.define("shareNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("shareNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRING
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.stopSharingNote = types.Method.define({
      alias : "stopSharingNote",
      args : types.Struct.define("stopSharingNoteArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("stopSharingNoteResult", {
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.authenticateToSharedNote = types.Method.define({
      alias : "authenticateToSharedNote",
      args : types.Struct.define("authenticateToSharedNoteArgs", {
        1 : {
          alias : "guid",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "noteKey",
          type : types.Type.STRING,
          index : 1
        },
        3 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 2
        }
      }),
      result : types.Struct.define("authenticateToSharedNoteResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : def.AuthenticationResult
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.findRelated = types.Method.define({
      alias : "findRelated",
      args : types.Struct.define("findRelatedArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "query",
          type : types.Type.STRUCT,
          def : module.exports.RelatedQuery,
          index : 1
        },
        3 : {
          alias : "resultSpec",
          type : types.Type.STRUCT,
          def : module.exports.RelatedResultSpec,
          index : 2
        }
      }),
      result : types.Struct.define("findRelatedResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.RelatedResult
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        },
        3 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        }
      })
    });
    UserStore.updateNoteIfUsnMatches = types.Method.define({
      alias : "updateNoteIfUsnMatches",
      args : types.Struct.define("updateNoteIfUsnMatchesArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "note",
          type : types.Type.STRUCT,
          def : self.Note,
          index : 1
        }
      }),
      result : types.Struct.define("updateNoteIfUsnMatchesResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.UpdateNoteIfUsnMatchesResult
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.manageNotebookShares = types.Method.define({
      alias : "manageNotebookShares",
      args : types.Struct.define("manageNotebookSharesArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "parameters",
          type : types.Type.STRUCT,
          def : module.exports.ManageNotebookSharesParameters,
          index : 1
        }
      }),
      result : types.Struct.define("manageNotebookSharesResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.ManageNotebookSharesResult
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    UserStore.getNotebookShares = types.Method.define({
      alias : "getNotebookShares",
      args : types.Struct.define("getNotebookSharesArgs", {
        1 : {
          alias : "authenticationToken",
          type : types.Type.STRING,
          index : 0
        },
        2 : {
          alias : "notebookGuid",
          type : types.Type.STRING,
          index : 1
        }
      }),
      result : types.Struct.define("getNotebookSharesResult", {
        0 : {
          alias : "returnValue",
          type : types.Type.STRUCT,
          def : module.exports.ShareRelationships
        },
        1 : {
          alias : "userException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMUserException
        },
        2 : {
          alias : "notFoundException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMNotFoundException
        },
        3 : {
          alias : "systemException",
          type : types.Type.EXCEPTION,
          def : $cs.EDAMSystemException
        }
      })
    });
    /**
     * @param {string} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getSyncState = function(authenticationToken, callback) {
      var mdef = UserStore.getSyncState;
      var args = new mdef.args;
      /** @type {string} */
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} afterUSN
     * @param {?} maxEntries
     * @param {!Function} filter
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getFilteredSyncChunk = function(authenticationToken, afterUSN, maxEntries, filter, callback) {
      var mdef = UserStore.getFilteredSyncChunk;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.afterUSN = afterUSN;
      args.maxEntries = maxEntries;
      /** @type {!Function} */
      args.filter = filter;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} linkedNotebook
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getLinkedNotebookSyncState = function(authenticationToken, linkedNotebook, callback) {
      var mdef = UserStore.getLinkedNotebookSyncState;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.linkedNotebook = linkedNotebook;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} linkedNotebook
     * @param {?} afterUSN
     * @param {?} maxEntries
     * @param {?} fullSyncOnly
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getLinkedNotebookSyncChunk = function(authenticationToken, linkedNotebook, afterUSN, maxEntries, fullSyncOnly, callback) {
      var mdef = UserStore.getLinkedNotebookSyncChunk;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.linkedNotebook = linkedNotebook;
      args.afterUSN = afterUSN;
      args.maxEntries = maxEntries;
      args.fullSyncOnly = fullSyncOnly;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listNotebooks = function(authenticationToken, callback) {
      var mdef = UserStore.listNotebooks;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listAccessibleBusinessNotebooks = function(authenticationToken, callback) {
      var mdef = UserStore.listAccessibleBusinessNotebooks;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNotebook = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getDefaultNotebook = function(authenticationToken, callback) {
      var mdef = UserStore.getDefaultNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Object} notebook
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.createNotebook = function(authenticationToken, notebook, callback) {
      var mdef = UserStore.createNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Object} */
      args.notebook = notebook;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Object} notebook
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateNotebook = function(authenticationToken, notebook, callback) {
      var mdef = UserStore.updateNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Object} */
      args.notebook = notebook;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.expungeNotebook = function(authenticationToken, guid, callback) {
      var mdef = UserStore.expungeNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listTags = function(authenticationToken, callback) {
      var mdef = UserStore.listTags;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} notebookGuid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listTagsByNotebook = function(authenticationToken, notebookGuid, callback) {
      var mdef = UserStore.listTagsByNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.notebookGuid = notebookGuid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getTag = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getTag;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} tag
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.createTag = function(authenticationToken, tag, callback) {
      var mdef = UserStore.createTag;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.tag = tag;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} tag
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateTag = function(authenticationToken, tag, callback) {
      var mdef = UserStore.updateTag;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.tag = tag;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.untagAll = function(authenticationToken, guid, callback) {
      var mdef = UserStore.untagAll;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.expungeTag = function(authenticationToken, guid, callback) {
      var mdef = UserStore.expungeTag;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listSearches = function(authenticationToken, callback) {
      var mdef = UserStore.listSearches;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getSearch = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getSearch;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Object} query
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.createSearch = function(authenticationToken, query, callback) {
      var mdef = UserStore.createSearch;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Object} */
      args.search = query;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Object} query
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateSearch = function(authenticationToken, query, callback) {
      var mdef = UserStore.updateSearch;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Object} */
      args.search = query;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {string} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.expungeSearch = function(authenticationToken, guid, callback) {
      var mdef = UserStore.expungeSearch;
      var args = new mdef.args;
      /** @type {string} */
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} filter
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.findNoteOffset = function(authenticationToken, filter, guid, callback) {
      var mdef = UserStore.findNoteOffset;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Function} */
      args.filter = filter;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} filter
     * @param {number} count
     * @param {number} a
     * @param {?} offset
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.findNotesMetadata = function(authenticationToken, filter, count, a, offset, callback) {
      var mdef = UserStore.findNotesMetadata;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Function} */
      args.filter = filter;
      /** @type {number} */
      args.offset = count;
      /** @type {number} */
      args.maxNotes = a;
      args.resultSpec = offset;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} filter
     * @param {?} withTrash
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.findNoteCounts = function(authenticationToken, filter, withTrash, callback) {
      var mdef = UserStore.findNoteCounts;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {!Function} */
      args.filter = filter;
      args.withTrash = withTrash;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {?} resultSpec
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNoteWithResultSpec = function(authenticationToken, guid, resultSpec, callback) {
      var mdef = UserStore.getNoteWithResultSpec;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      args.resultSpec = resultSpec;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {?} withContent
     * @param {?} withResourcesData
     * @param {?} withResourcesRecognition
     * @param {?} withResourcesAlternateData
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNote = function(authenticationToken, guid, withContent, withResourcesData, withResourcesRecognition, withResourcesAlternateData, callback) {
      var mdef = UserStore.getNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      args.withContent = withContent;
      args.withResourcesData = withResourcesData;
      args.withResourcesRecognition = withResourcesRecognition;
      args.withResourcesAlternateData = withResourcesAlternateData;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNoteApplicationData = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getNoteApplicationData;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {string} authenticationToken
     * @param {string} guid
     * @param {string} key
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNoteApplicationDataEntry = function(authenticationToken, guid, key, callback) {
      var mdef = UserStore.getNoteApplicationDataEntry;
      var args = new mdef.args;
      /** @type {string} */
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      /** @type {string} */
      args.key = key;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {string} value
     * @param {!Object} key
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.setNoteApplicationDataEntry = function(authenticationToken, guid, value, key, callback) {
      var mdef = UserStore.setNoteApplicationDataEntry;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      /** @type {string} */
      args.key = value;
      /** @type {!Object} */
      args.value = key;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {string} key
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.unsetNoteApplicationDataEntry = function(authenticationToken, guid, key, callback) {
      var mdef = UserStore.unsetNoteApplicationDataEntry;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      /** @type {string} */
      args.key = key;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNoteContent = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getNoteContent;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {?} noteOnly
     * @param {?} tokenizeForIndexing
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNoteSearchText = function(authenticationToken, guid, noteOnly, tokenizeForIndexing, callback) {
      var mdef = UserStore.getNoteSearchText;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      args.noteOnly = noteOnly;
      args.tokenizeForIndexing = tokenizeForIndexing;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceSearchText = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getResourceSearchText;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNoteTagNames = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getNoteTagNames;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} note
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.createNote = function(authenticationToken, note, callback) {
      var mdef = UserStore.createNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.note = note;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} note
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateNote = function(authenticationToken, note, callback) {
      var mdef = UserStore.updateNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.note = note;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.deleteNote = function(authenticationToken, guid, callback) {
      var mdef = UserStore.deleteNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.expungeNote = function(authenticationToken, guid, callback) {
      var mdef = UserStore.expungeNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} noteGuid
     * @param {?} toNotebookGuid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.copyNote = function(authenticationToken, noteGuid, toNotebookGuid, callback) {
      var mdef = UserStore.copyNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.noteGuid = noteGuid;
      args.toNotebookGuid = toNotebookGuid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} noteGuid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listNoteVersions = function(authenticationToken, noteGuid, callback) {
      var mdef = UserStore.listNoteVersions;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.noteGuid = noteGuid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} noteGuid
     * @param {?} updateSequenceNum
     * @param {?} withResourcesData
     * @param {?} withResourcesRecognition
     * @param {?} withResourcesAlternateData
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNoteVersion = function(authenticationToken, noteGuid, updateSequenceNum, withResourcesData, withResourcesRecognition, withResourcesAlternateData, callback) {
      var mdef = UserStore.getNoteVersion;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.noteGuid = noteGuid;
      args.updateSequenceNum = updateSequenceNum;
      args.withResourcesData = withResourcesData;
      args.withResourcesRecognition = withResourcesRecognition;
      args.withResourcesAlternateData = withResourcesAlternateData;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {?} withData
     * @param {?} withRecognition
     * @param {?} withAttributes
     * @param {?} withAlternateData
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResource = function(authenticationToken, guid, withData, withRecognition, withAttributes, withAlternateData, callback) {
      var mdef = UserStore.getResource;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      args.withData = withData;
      args.withRecognition = withRecognition;
      args.withAttributes = withAttributes;
      args.withAlternateData = withAlternateData;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceApplicationData = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getResourceApplicationData;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {string} key
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceApplicationDataEntry = function(authenticationToken, guid, key, callback) {
      var mdef = UserStore.getResourceApplicationDataEntry;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      /** @type {string} */
      args.key = key;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {string} value
     * @param {!Object} key
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.setResourceApplicationDataEntry = function(authenticationToken, guid, value, key, callback) {
      var mdef = UserStore.setResourceApplicationDataEntry;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      /** @type {string} */
      args.key = value;
      /** @type {!Object} */
      args.value = key;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {string} key
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.unsetResourceApplicationDataEntry = function(authenticationToken, guid, key, callback) {
      var mdef = UserStore.unsetResourceApplicationDataEntry;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      /** @type {string} */
      args.key = key;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} resource
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateResource = function(authenticationToken, resource, callback) {
      var mdef = UserStore.updateResource;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.resource = resource;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceData = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getResourceData;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} noteGuid
     * @param {?} contentHash
     * @param {?} withData
     * @param {?} withRecognition
     * @param {?} withAlternateData
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceByHash = function(authenticationToken, noteGuid, contentHash, withData, withRecognition, withAlternateData, callback) {
      var mdef = UserStore.getResourceByHash;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.noteGuid = noteGuid;
      args.contentHash = contentHash;
      args.withData = withData;
      args.withRecognition = withRecognition;
      args.withAlternateData = withAlternateData;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceRecognition = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getResourceRecognition;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceAlternateData = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getResourceAlternateData;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getResourceAttributes = function(authenticationToken, guid, callback) {
      var mdef = UserStore.getResourceAttributes;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {string} userId
     * @param {?} publicUri
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getPublicNotebook = function(userId, publicUri, callback) {
      var mdef = UserStore.getPublicNotebook;
      var args = new mdef.args;
      /** @type {string} */
      args.userId = userId;
      args.publicUri = publicUri;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} sharedNotebook
     * @param {string} message
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.shareNotebook = function(authenticationToken, sharedNotebook, message, callback) {
      var mdef = UserStore.shareNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.sharedNotebook = sharedNotebook;
      /** @type {string} */
      args.message = message;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} shareTemplate
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.createOrUpdateNotebookShares = function(authenticationToken, shareTemplate, callback) {
      var mdef = UserStore.createOrUpdateNotebookShares;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.shareTemplate = shareTemplate;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} sharedNotebook
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateSharedNotebook = function(authenticationToken, sharedNotebook, callback) {
      var mdef = UserStore.updateSharedNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.sharedNotebook = sharedNotebook;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} notebookGuid
     * @param {?} recipientSettings
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.setNotebookRecipientSettings = function(authenticationToken, notebookGuid, recipientSettings, callback) {
      var mdef = UserStore.setNotebookRecipientSettings;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.notebookGuid = notebookGuid;
      args.recipientSettings = recipientSettings;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listSharedNotebooks = function(authenticationToken, callback) {
      var mdef = UserStore.listSharedNotebooks;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} linkedNotebook
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.createLinkedNotebook = function(authenticationToken, linkedNotebook, callback) {
      var mdef = UserStore.createLinkedNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.linkedNotebook = linkedNotebook;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} linkedNotebook
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateLinkedNotebook = function(authenticationToken, linkedNotebook, callback) {
      var mdef = UserStore.updateLinkedNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.linkedNotebook = linkedNotebook;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.listLinkedNotebooks = function(authenticationToken, callback) {
      var mdef = UserStore.listLinkedNotebooks;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.expungeLinkedNotebook = function(authenticationToken, guid, callback) {
      var mdef = UserStore.expungeLinkedNotebook;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} shareKeyOrGlobalId
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.authenticateToSharedNotebook = function(shareKeyOrGlobalId, authenticationToken, callback) {
      var mdef = UserStore.authenticateToSharedNotebook;
      var args = new mdef.args;
      args.shareKeyOrGlobalId = shareKeyOrGlobalId;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getSharedNotebookByAuth = function(authenticationToken, callback) {
      var mdef = UserStore.getSharedNotebookByAuth;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} parameters
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.emailNote = function(authenticationToken, parameters, callback) {
      var mdef = UserStore.emailNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.parameters = parameters;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.shareNote = function(authenticationToken, guid, callback) {
      var mdef = UserStore.shareNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} guid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.stopSharingNote = function(authenticationToken, guid, callback) {
      var mdef = UserStore.stopSharingNote;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.guid = guid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {string} guid
     * @param {?} noteKey
     * @param {?} authenticationToken
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.authenticateToSharedNote = function(guid, noteKey, authenticationToken, callback) {
      var mdef = UserStore.authenticateToSharedNote;
      var args = new mdef.args;
      /** @type {string} */
      args.guid = guid;
      args.noteKey = noteKey;
      args.authenticationToken = authenticationToken;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} query
     * @param {?} resultSpec
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.findRelated = function(authenticationToken, query, resultSpec, callback) {
      var mdef = UserStore.findRelated;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.query = query;
      args.resultSpec = resultSpec;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {string} note
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.updateNoteIfUsnMatches = function(authenticationToken, note, callback) {
      var mdef = UserStore.updateNoteIfUsnMatches;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      /** @type {string} */
      args.note = note;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} parameters
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.manageNotebookShares = function(authenticationToken, parameters, callback) {
      var mdef = UserStore.manageNotebookShares;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.parameters = parameters;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /**
     * @param {?} authenticationToken
     * @param {?} notebookGuid
     * @param {!Function} callback
     * @return {undefined}
     */
    Client.prototype.getNotebookShares = function(authenticationToken, notebookGuid, callback) {
      var mdef = UserStore.getNotebookShares;
      var args = new mdef.args;
      args.authenticationToken = authenticationToken;
      args.notebookGuid = notebookGuid;
      mdef.sendRequest(this.output, this.seqid++, args, callback);
    };
    /** @type {function(string): undefined} */
    module.exports.NoteStore.Client = Client;
    /**
     * @return {undefined}
     */
    test.prototype.start = function() {
      this.stransport.listen();
    };
    /**
     * @return {undefined}
     */
    test.prototype.stop = function() {
      this.stransport.close();
    };
    /** @type {function(!Object, !Object, ?): undefined} */
    module.exports.NoteStore.Server = test;
  },
  59 : function(task, id, require) {
    (function(requestValuesAggs) {
      /**
       * @param {?} val
       * @param {boolean} count
       * @return {undefined}
       */
      function self(val, count) {
        var url = s.parse(val);
        this.hostname = url.hostname;
        this.port = url.port;
        this.path = url.path;
        this.url = url.href;
        /** @type {boolean} */
        this.quiet = count;
        this.input = new Dictionaries;
        this.additionalHeaders = {};
      }
      var Dictionaries = require(207);
      var i = require(55);
      var s = require(26);
      /**
       * @param {?} obj
       * @return {undefined}
       */
      self.prototype.addHeaders = function(obj) {
        Object.assign(this.additionalHeaders, obj);
      };
      /**
       * @return {undefined}
       */
      self.prototype.open = function() {
      };
      /**
       * @return {undefined}
       */
      self.prototype.close = function() {
      };
      /**
       * @param {?} name
       * @return {?}
       */
      self.prototype.read = function(name) {
        throw Error("BinaryHttpTransport object does not support reads");
      };
      /**
       * @param {!Object} input
       * @return {undefined}
       */
      self.prototype.write = function(input) {
        this.input.write(input);
      };
      /**
       * @return {undefined}
       */
      self.prototype.clear = function() {
        this.input.clear();
      };
      /**
       * @param {!Function} callback
       * @return {undefined}
       */
      self.prototype.flush = function(callback) {
        var options = this;
        var opts = {
          protocol : "https:",
          hostname : this.hostname,
          port : this.port,
          path : this.path,
          method : "POST",
          headers : Object.assign({}, {
            "Content-Type" : "application/x-thrift",
            Accept : "application/x-thrift"
          }, options.additionalHeaders)
        };
        var req = i.request(opts, function(response2) {
          /** @type {!Array} */
          var imageDataArr = [];
          if (200 != response2.statusCode) {
            options.log("Error in Thrift HTTP response: " + response2.statusCode);
            if (callback) {
              callback(response2);
            }
          }
          response2.on("data", function(bmpInfoHeader) {
            imageDataArr.push(bmpInfoHeader);
          });
          response2.on("end", function() {
            var localeCode = requestValuesAggs.concat(imageDataArr);
            if (callback) {
              callback(null, new Dictionaries(localeCode));
            }
          });
        });
        req.on("error", function(result) {
          options.log("Error making Thrift HTTP request: " + result);
          if (callback) {
            callback(result);
          }
        });
        this.input.flush();
        req.write(this.input.buffer);
        req.end();
        this.clear();
      };
      /**
       * @param {string} err
       * @return {undefined}
       */
      self.prototype.log = function(err) {
        if (!this.quiet) {
          console.log(err);
        }
      };
      /** @type {function(?, boolean): undefined} */
      task.exports = self;
    }).call(this, require(3).Buffer);
  },
  60 : function(module, id, require) {
    (function(Buffer) {
      /**
       * @param {!Object} trans
       * @param {number} b
       * @param {?} options
       * @return {undefined}
       */
      function ByteBuffer(trans, b, options) {
        this.transport = this.trans = trans;
        this.strictRead = void 0 !== b && b;
        this.strictWrite = void 0 === options || options;
      }
      var Type = require(18).Type;
      /**
       * @param {!Function} callback
       * @return {?}
       */
      ByteBuffer.prototype.flush = function(callback) {
        var done;
        return callback && (done = function(mode, size) {
          var buffer;
          return size && (buffer = new ByteBuffer(size)), callback(mode, buffer);
        }), this.trans.flush(done);
      };
      /**
       * @param {string} name
       * @param {number} type
       * @param {number} seqid
       * @return {undefined}
       */
      ByteBuffer.prototype.writeMessageBegin = function(name, type, seqid) {
        if (this.strictWrite) {
          this.writeI32(-2147418112 | type);
          this.writeString(name);
          this.writeI32(seqid);
        } else {
          this.writeString(name);
          this.writeByte(type);
          this.writeI32(seqid);
        }
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.writeMessageEnd = function() {
      };
      /**
       * @param {?} name
       * @return {undefined}
       */
      ByteBuffer.prototype.writeStructBegin = function(name) {
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.writeStructEnd = function() {
      };
      /**
       * @param {?} name
       * @param {!Function} type
       * @param {boolean} id
       * @return {undefined}
       */
      ByteBuffer.prototype.writeFieldBegin = function(name, type, id) {
        this.writeByte(type);
        this.writeI16(id);
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.writeFieldEnd = function() {
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.writeFieldStop = function() {
        this.writeByte(Type.STOP);
      };
      /**
       * @param {!Function} ktype
       * @param {!Function} vtype
       * @param {number} size
       * @return {undefined}
       */
      ByteBuffer.prototype.writeMapBegin = function(ktype, vtype, size) {
        this.writeByte(ktype);
        this.writeByte(vtype);
        this.writeI32(size);
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.writeMapEnd = function() {
      };
      /**
       * @param {!Function} etype
       * @param {!Function} size
       * @return {undefined}
       */
      ByteBuffer.prototype.writeListBegin = function(etype, size) {
        this.writeByte(etype);
        this.writeI32(size);
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.writeListEnd = function() {
      };
      /**
       * @param {!Function} etype
       * @param {!Function} size
       * @return {undefined}
       */
      ByteBuffer.prototype.writeSetBegin = function(etype, size) {
        this.writeByte(etype);
        this.writeI32(size);
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.writeSetEnd = function() {
      };
      /**
       * @param {!Object} value
       * @return {undefined}
       */
      ByteBuffer.prototype.writeBool = function(value) {
        if (value) {
          this.writeByte(1);
        } else {
          this.writeByte(0);
        }
      };
      /**
       * @param {!Function} b
       * @return {undefined}
       */
      ByteBuffer.prototype.writeByte = function(b) {
        this.trans.write(BinaryParser.fromByte(b));
      };
      /**
       * @param {!Object} input
       * @return {undefined}
       */
      ByteBuffer.prototype.writeBinary = function(input) {
        if ("string" === typeof input && (input = BinaryParser.fromString(input)), null == input.length) {
          throw Error("Cannot read length of binary data");
        }
        this.writeI32(input.length);
        this.trans.write(input);
      };
      /**
       * @param {boolean} i16
       * @return {undefined}
       */
      ByteBuffer.prototype.writeI16 = function(i16) {
        this.trans.write(BinaryParser.fromShort(i16));
      };
      /**
       * @param {!Function} i32
       * @return {undefined}
       */
      ByteBuffer.prototype.writeI32 = function(i32) {
        this.trans.write(BinaryParser.fromInt(i32));
      };
      /**
       * @param {(Object|string)} i64
       * @return {undefined}
       */
      ByteBuffer.prototype.writeI64 = function(i64) {
        var output = BinaryParser.fromLong(i64);
        this.trans.write(output);
      };
      /**
       * @param {!Object} dub
       * @return {undefined}
       */
      ByteBuffer.prototype.writeDouble = function(dub) {
        this.trans.write(BinaryParser.fromDouble(dub));
      };
      /**
       * @param {!Object} value
       * @return {undefined}
       */
      ByteBuffer.prototype.writeString = function(value) {
        var output = BinaryParser.fromString(value);
        this.writeI32(output.length);
        this.trans.write(output);
      };
      /**
       * @param {string} type
       * @param {!Object} value
       * @return {?}
       */
      ByteBuffer.prototype.writeType = function(type, value) {
        switch(type) {
          case Type.BOOL:
            return this.writeBool(value);
          case Type.BYTE:
            return this.writeByte(value);
          case Type.I16:
            return this.writeI16(value);
          case Type.I32:
            return this.writeI32(value);
          case Type.I64:
            return this.writeI64(value);
          case Type.DOUBLE:
            return this.writeDouble(value);
          case Type.STRING:
            return this.writeString(value);
          case Type.BINARY:
            return this.writeBinary(value);
          default:
            throw Error("Invalid type: " + type);
        }
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readMessageBegin = function() {
        var size = this.readI32();
        var signature = {
          mtype : null,
          fname : null,
          seqid : null
        };
        if (size < 0) {
          /** @type {number} */
          var ticketID = -65536 & size;
          if (-2147418112 != ticketID) {
            throw console.log("BAD: " + ticketID), Error("Bad version in readMessageBegin: " + size);
          }
          /** @type {number} */
          signature.mtype = 255 & size;
          signature.fname = this.readString();
          signature.seqid = this.readI32();
        } else {
          if (this.strictRead) {
            throw Error("No protocol version header");
          }
          signature.fname = this.trans.read(size);
          signature.mtype = this.readByte();
          signature.seqid = this.readI32();
        }
        return signature;
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.readMessageEnd = function() {
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readStructBegin = function() {
        return {
          fname : ""
        };
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.readStructEnd = function() {
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readFieldBegin = function() {
        var type = this.readByte();
        var field = {
          fname : null,
          ftype : type,
          fid : 0
        };
        return type != Type.STOP && (field.fid = this.readI16()), field;
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.readFieldEnd = function() {
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readMapBegin = function() {
        var result = {
          ktype : null,
          vtype : null,
          size : null
        };
        return result.ktype = this.readByte(), result.vtype = this.readByte(), result.size = this.readI32(), result;
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.readMapEnd = function() {
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readListBegin = function() {
        var result = {
          etype : null,
          size : null
        };
        return result.etype = this.readByte(), result.size = this.readI32(), result;
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.readListEnd = function() {
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readSetBegin = function() {
        var result = {
          etype : null,
          size : null
        };
        return result.etype = this.readByte(), result.size = this.readI32(), result;
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.readSetEnd = function() {
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readBool = function() {
        return 1 == this.readByte();
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readByte = function() {
        return this.trans.read(1).readUInt8(0);
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readI16 = function() {
        return this.trans.read(2).readInt16BE(0);
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readI32 = function() {
        return this.trans.read(4).readInt32BE(0);
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readI64 = function() {
        var dataview = this.trans.read(8);
        return BinaryParser.toLong(dataview);
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readDouble = function() {
        return this.trans.read(8).readDoubleBE(0);
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readBinary = function() {
        var size = this.readI32();
        return this.trans.read(size);
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.readString = function() {
        var size = this.readI32();
        return this.trans.read(size).toString();
      };
      /**
       * @param {string} type
       * @return {?}
       */
      ByteBuffer.prototype.readType = function(type) {
        switch(type) {
          case Type.BOOL:
            return this.readBool();
          case Type.BYTE:
            return this.readByte();
          case Type.I16:
            return this.readI16();
          case Type.I32:
            return this.readI32();
          case Type.I64:
            return this.readI64();
          case Type.DOUBLE:
            return this.readDouble();
          case Type.STRING:
            return this.readString();
          case Type.BINARY:
            return this.readBinary();
          default:
            throw new Error("Invalid type: " + type);
        }
      };
      /**
       * @return {?}
       */
      ByteBuffer.prototype.getTransport = function() {
        return this.trans;
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.skipStruct = function() {
        this.readStructBegin();
        this.skipFields();
        this.readStructEnd();
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.skipFields = function() {
        var ret = this.readFieldBegin();
        if (ret.ftype !== Type.STOP) {
          this.skip(ret.ftype);
          this.readFieldEnd();
          this.skipFields();
        }
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.skipMap = function() {
        /** @type {number} */
        var n = 0;
        var map = this.readMapBegin();
        /** @type {number} */
        n = 0;
        for (; n < map.size; n++) {
          this.skip(map.ktype);
          this.skip(map.vtype);
        }
        this.readMapEnd();
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.skipSet = function() {
        /** @type {number} */
        var i2 = 0;
        var setBegin = this.readSetBegin();
        /** @type {number} */
        i2 = 0;
        for (; i2 < setBegin.size; i2++) {
          this.skip(setBegin.etype);
        }
        this.readSetEnd();
      };
      /**
       * @return {undefined}
       */
      ByteBuffer.prototype.skipList = function() {
        /** @type {number} */
        var i3 = 0;
        var listBegin = this.readListBegin();
        /** @type {number} */
        i3 = 0;
        for (; i3 < listBegin.size; i3++) {
          this.skip(listBegin.etype);
        }
        this.readListEnd();
      };
      /**
       * @param {string} n
       * @return {?}
       */
      ByteBuffer.prototype.skip = function(n) {
        switch(n) {
          case Type.STOP:
            return;
          case Type.BOOL:
            return this.readBool();
          case Type.BYTE:
            return this.readByte();
          case Type.I16:
            return this.readI16();
          case Type.I32:
            return this.readI32();
          case Type.I64:
            return this.readI64();
          case Type.DOUBLE:
            return this.readDouble();
          case Type.STRING:
            return this.readString();
          case Type.STRUCT:
            return this.skipStruct();
          case Type.MAP:
            return this.skipMap();
          case Type.SET:
            return this.skipSet();
          case Type.LIST:
            return this.skipList();
          case Type.BINARY:
            return this.readBinary();
          default:
            throw Error("Invalid type: " + n);
        }
      };
      var BinaryParser = {
        fromByte : function(b) {
          var buff = new Buffer(1);
          return buff.writeInt8(b, 0), buff;
        },
        fromShort : function(i16) {
          /** @type {number} */
          i16 = parseInt(i16);
          var buffer = new Buffer(2);
          return buffer.writeInt16BE(i16, 0), buffer;
        },
        fromInt : function(value) {
          /** @type {number} */
          value = parseInt(value);
          var lengthBuffer = new Buffer(4);
          return lengthBuffer.writeInt32BE(value, 0), lengthBuffer;
        },
        fromLong : function(n) {
          if (n = parseInt(n), Math.abs(n) >= Math.pow(2, 53)) {
            throw new Error("Unable to accurately transfer numbers larger than 2^53 - 1 as integers. Number provided was " + n);
          }
          /** @type {string} */
          var bits = (Array(64).join("0") + Math.abs(n).toString(2)).slice(-64);
          if (n < 0) {
            bits = this.twosCompliment(bits);
          }
          var buffer = new Buffer(8);
          /** @type {number} */
          var i = 0;
          for (; i < 8; i++) {
            /** @type {number} */
            var firstByte = parseInt(bits.substr(8 * i, 8), 2);
            buffer.writeUInt8(firstByte, i);
          }
          return buffer;
        },
        twosCompliment : function(b) {
          var t = b.lastIndexOf("1");
          var str = b.substring(0, t).replace(/1/g, "x").replace(/0/g, "1").replace(/x/g, "0");
          return b = str + b.substring(t);
        },
        fromDouble : function(d) {
          var buf = new Buffer(8);
          return buf.writeDoubleBE(d, 0), buf;
        },
        fromString : function(input) {
          var name = Buffer.byteLength(input);
          var result = new Buffer(name);
          return result.write(input), result;
        },
        toLong : function(dataview) {
          /** @type {number} */
          var sign = 1;
          /** @type {string} */
          var bits = "";
          /** @type {number} */
          var i = 0;
          for (; i < 8; i++) {
            bits = bits + (Array(8).join("0") + dataview.readUInt8(i).toString(2)).slice(-8);
          }
          if ("1" === bits[0]) {
            /** @type {number} */
            sign = -1;
            bits = this.twosCompliment(bits);
          }
          var index = bits.indexOf("1");
          if (-1 != index && index < 10) {
            throw new Error("Unable to receive number larger than 2^53 - 1 as an integer");
          }
          return parseInt(bits, 2) * sign;
        }
      };
      /** @type {function(!Object, number, ?): undefined} */
      module.exports = ByteBuffer;
    }).call(this, require(3).Buffer);
  }
}, [[110, 1, 2]]]);
