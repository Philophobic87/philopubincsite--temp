const express = require("express");
const path = require("path");
const mailchimp = require("mailchimp-api-v3");
require("dotenv").config({ path: __dirname + "/variables.env" });
