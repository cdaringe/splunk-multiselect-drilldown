function setMultiselectFromKey ({ component, key, mvc }) {
  var choices = component.options.choices
  var kv = choices.find(choice => choice.label === key)
  if (!kv) throw new Error(`key "${key}" not found in component choices`)
  ;['default', 'submitted'].forEach(tokenStore => {
    var tokens = mvc.Components.get(tokenStore)
    tokens.set(component.options.token, kv.value)
  })
}

function updateMultiSelectsFromQuery (mvc) {
  var queryKvPairs = window.location.search
    .replace(/^\?/, '')
    .split('&')
    .reduce((agg, kv) => {
      console.log(kv)
      return Object.assign(agg, { [kv.split('=')[0]]: kv.split('=')[1] })
    }, {})
  mvc.Components
    .getInstances()
    .filter(item => item.options && item.options.type === 'multiselect')
    .filter(component => `form.${component.options.token}` in queryKvPairs)
    .map(component => setMultiselectFromKey({
      component,
      key: queryKvPairs[`form.${component.options.token}`],
      mvc
    }))
}

module.exports = {
  setMultiselectFromKey,
  updateMultiSelectsFromQuery
}
