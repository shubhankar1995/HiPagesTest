
const initState = {
    avlJobs : [
        {
            "id": 2,
            "status": "new",
            "suburb": "Bondi",
            "category": "Electrical",
            "contact_name": "Darth Vader",
            "contact_phone": "0422223333",
            "contact_email": "darth@mailinator.com",
            "price": 30,
            "description": "Praesent elit dui, blandit eget nisl sed, ornare pharetra urna. In cursus auctor tellus. Quisque ligula metus, viverra nec nibh ut, sagittis luctus tellus. Nulla egestas nibh ut diam vehicula, ut auctor lectus pharetra. Aliquam condimentum, erat eget vehicula eleifend, nulla risus consequat augue, quis convallis mi diam et dui.",
            "updated_at": "0001-01-01T00:00:00",
            "postCode": "2026"
        },
        {
            "id": 3,
            "status": "new",
            "suburb": "Manly",
            "category": "Carpentry",
            "contact_name": "Han Solo",
            "contact_phone": "0498765432",
            "contact_email": "han@mailinator.com",
            "price": 45,
            "description": "Aliquam posuere est sit amet libero egestas tempus. Donec ut efficitur sapien. Sed molestie nec lacus malesuada suscipit. Aliquam suscipit nibh at posuere tempor. Etiam a sollicitudin felis. In et enim leo. Morbi vel imperdiet purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam posuere auctor elit, id venenatis.",
            "updated_at": "0001-01-01T00:00:00",
            "postCode": "2095"
        },
        {
            "id": 4,
            "status": "new",
            "suburb": "Surry Hills",
            "category": "Handyman",
            "contact_name": "Kylo Ren",
            "contact_phone": "0488770066",
            "contact_email": "kylo@mailinator.com",
            "price": 15,
            "description": "Proin semper consectetur mauris id commodo. In accumsan est ligula, id posuere libero placerat ac. Nunc non volutpat sem. Mauris gravida dictum eleifend. Praesent quis mattis arcu, rutrum sagittis diam. Nullam tempus sagittis diam, vel viverra nunc ultricies non. Sed at orci sem. Phasellus eget arcu hendrerit, congue metus ut, mollis tellus. Quisque gravida metus ut libero porta, sit amet rutrum odio porta. Fusce interdum est sed quam venenatis dictum. Integer ultrices est in odio semper dictum. Proin nec urna vel quam finibus maximus.\n\nSed accumsan urna vitae libero luctus volutpat. Nulla eu sodales enim, vitae blandit ligula. Suspendisse at magna pellentesque, rhoncus orci quis, consequat diam. Donec pulvinar accumsan erat, quis hendrerit est ultricies vel. Vivamus felis justo, vulputate non urna sed, finibus semper ipsum. Cras mattis, est vel posuere mattis, turpis augue elementum massa, vitae accumsan nibh nisl nec lectus. Maecenas porta sagittis erat at consequat. Suspendisse fermentum rutrum bibendum. Donec tempor mollis massa vel egestas.\n\nMorbi rutrum felis lacinia eros tincidunt scelerisque. Morbi aliquam porttitor sapien. Phasellus eu odio ac neque faucibus suscipit in at lectus. Maecenas et blandit arcu. Nullam sed sem neque. Nulla sit amet tristique nisl. Ut et pretium velit. Fusce consequat tincidunt fringilla. Nunc gravida libero sit amet augue viverra, a imperdiet odio dictum. Sed iaculis, metus vel rutrum convallis, quam ex commodo nibh, eget ultrices nisi eros eu massa. Ut iaculis maximus ligula, sed efficitur mauris bibendum sagittis. Curabitur et dolor mi. Proin lorem urna, porttitor quis lacus pharetra, ornare porta nulla. Sed ultricies feugiat nibh, et semper tellus aliquet sit amet. Cras faucibus scelerisque nisi, at vestibulum massa pharetra et.\n\n",
            "updated_at": "0001-01-01T00:00:00",
            "postCode": "2010"
        },
        {
            "id": 5,
            "status": "new",
            "suburb": "Newtown",
            "category": "Building",
            "contact_name": "Lando Calrissian",
            "contact_phone": "0433335555",
            "contact_email": "lando@mailinator.com",
            "price": 62,
            "description": "Quisque blandit erat id mi tincidunt porta. Vivamus eleifend sagittis neque id maximus. Etiam molestie, massa ut tempus fermentum, augue nisi pulvinar nunc, id malesuada ipsum ipsum nec odio. Etiam et nisl facilisis, egestas massa eget, sagittis sapien. Curabitur eget consequat diam. Proin auctor rhoncus est, vitae imperdiet sem mollis.",
            "updated_at": "0001-01-01T00:00:00",
            "postCode": "2042"
        }
    ],
    acceptJobs : [
        {
            "id": 12,
            "status": "new",
            "suburb": "Bondi",
            "category": "Electrical",
            "contact_name": "Darth Vader",
            "contact_phone": "0422223333",
            "contact_email": "darth@mailinator.com",
            "price": 30,
            "description": "Praesent elit dui, blandit eget nisl sed, ornare pharetra urna. In cursus auctor tellus. Quisque ligula metus, viverra nec nibh ut, sagittis luctus tellus. Nulla egestas nibh ut diam vehicula, ut auctor lectus pharetra. Aliquam condimentum, erat eget vehicula eleifend, nulla risus consequat augue, quis convallis mi diam et dui.",
            "updated_at": "0001-01-01T00:00:00",
            "postCode": "2026"
        }
    ]
}

const jobReducer = (state = initState, action) => {
    if (action.type === 'ACCEPT_JOB'){
        console.log(action)
        let newAvlJobs = state.avlJobs.filter(job => {
            return action.id !== job.id
        });
        let tmpAvlJobs = state.avlJobs.filter(job => {
            return action.id === job.id
        });
        state.acceptJobs.push(tmpAvlJobs[0])
        return {
            ...state,
            avlJobs : newAvlJobs
        }
    }
    if (action.type === 'DECLINE_JOB'){
        console.log(action)
        let newAvlJobs = state.avlJobs.filter(job => {
            return action.id !== job.id
        });
        return {
            ...state,
            avlJobs : newAvlJobs
        }
    }
    return state;
}

export default jobReducer;