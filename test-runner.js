const Jasmine = require('jasmine');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

const jasmine = new Jasmine();

jasmine.configureDefaultReporter({
  // Silence default reporter
  print : () => {}
});

// Register custom suite reporter
jasmine.addReporter(new SpecReporter({
  includeStack: true
}));

jasmine.loadConfigFile('jasmine.json');
jasmine.execute();
