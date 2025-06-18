//Place this file into the server_scripts/ folder after installing KubeJS

ServerEvents.recipes( event => {
  event.remove({ id: 'scguns:buckshot' })
  event.shapeless(
    Item.of('scguns:buckshot', 6),
    [
      'minecraft:gunpowder',
      '4x scguns:stan_bullet_tips'
    ]
  ).id('${id}_manual_only')
})
