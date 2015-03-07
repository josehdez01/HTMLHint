/**
 * Copyright (c) 2014, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */

var expect  = require("expect.js");

var HTMLHint  = require("../../lib/htmlhint.src.js").HTMLHint;

var ruldId = 'id-class-ad-disabled',
    ruleOptions = {};

ruleOptions[ruldId] = true;

describe('Rules: '+ruldId, function(){

    it('Id use ad keyword should result in an error', function(){
        var code = '<div id="ad">test</div>';
        var messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].type).to.be('warning');
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div id="ad-222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div id="ad_222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div id="111-ad">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div id="111_ad">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div id="111-ad-222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div id="111_ad_222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);
    });

    it('Class use ad keyword should result in an error', function(){
        var code = '<div class="ad">test</div>';
        var messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div class="ad-222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div class="ad_222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div class="111-ad">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div class="111_ad">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div class="111-ad-222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);

        code = '<div class="111_ad_222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(1);
        expect(messages[0].rule.id).to.be(ruldId);
        expect(messages[0].line).to.be(1);
        expect(messages[0].col).to.be(5);
    });

    it('Id and class no ad keyword used should not result in an error', function(){
        var code = '<div id="ad1" class="ad2">test</div>';
        var messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(0);

        code = '<div id="ad1-222" class="ad2-222">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(0);

        code = '<div id="111-ad1" class="111-ad2">test</div>';
        messages = HTMLHint.verify(code, ruleOptions);
        expect(messages.length).to.be(0);
    });

});