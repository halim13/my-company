import React from 'react'

const items_list = [
    {
        title: 'Who we are',
        subtitle: 'Technology Company',
        description: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
        title: 'What we do',
        subtitle: 'Professional Brand Management',
        description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
    {
        title: 'How we do',
        subtitle: 'Strategize, Design, Collaborate',
        description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
    },
]

const Item = ({ title, subtitle, description }) => <div className="mb-12 lg:mb-0">
    <h1 className="mb-2 text-3xl font-bold" style={{ color: '#029FE4' }}>{title}</h1>
    <div className="mb-2 flex font-medium text-danger dark:text-danger-500 lg:justify-start">
        {subtitle}
    </div>
    <p className="text-neutral-500 dark:text-neutral-300">
        {description}
    </p>
</div>

function WhoWeAre() {
    return (
        <div className="grid gap-x-6 lg:grid-cols-3 px-8 py-24 bg-white" id='whoweare'>
            {
                items_list.map((list, i) => <Item
                    key={i}
                    title={list.title}
                    subtitle={list.subtitle}
                    description={list.description}
                />)
            }
        </div>
    )
}

export default WhoWeAre
