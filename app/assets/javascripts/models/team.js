CalculateYourTV.Team = DS.Model.extend({
  name: DS.attr(),
  roster: DS.belongsTo("roster"),
  players: DS.hasMany("player"),
  rerolls: DS.attr(),
  assistant_coaches: DS.attr(),
  cheerleaders: DS.attr(),
  apothecary: DS.attr(),
  fanFactor: DS.attr(),
  gold: DS.attr()
});
