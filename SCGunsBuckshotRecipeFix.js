//Place this file into the server_scripts/ folder after installing KubeJS

ServerEvents.recipes( event => {
  event.remove({ id: 'scguns:buckshot' })
  event.shapeless(buckshot.json).id(recipe.getId() + '_manual_only')
})
