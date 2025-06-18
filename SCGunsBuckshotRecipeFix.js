//Place this file into the server_scripts/ folder after installing KubeJS

ServerEvents.recipes( event => {
	event.shapeless(
		Item.of('scguns:buckshot', 6),
      			[
        		{"tag": "forge:gunpowder"},
        		{"tag": "scguns:stan_bullet_tips"},
    			{"tag": "scguns:stan_bullet_tips"},
    			{"tag": "scguns:stan_bullet_tips"},
    			{"tag": "scguns:stan_bullet_tips"}]
	).id('kubejs:buckshot_manual_only')
	event.remove({id: 'scguns:buckshot'})
})
