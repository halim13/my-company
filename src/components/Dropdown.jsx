import { Menu } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Dropdown() {
    return (
        <Menu as="div" className="relative inline-block text-left mb-4">
            <div>
                <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-['#00537C'] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    TECHNOLOGY DEPARTMENT
                    <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                </Menu.Button>
            </div>
        </Menu>
    )
}
