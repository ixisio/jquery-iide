$(function () {

    module("jiide")

      test("should be defined on window object", function () {
        ok(window.jiide, 'jiide is defined on global [object Window]');
      });

      test("should be define some tests here", function () {
        ok( false === true, ' plugin tests available');
      });
})