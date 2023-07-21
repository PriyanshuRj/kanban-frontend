import React, {Fragment} from 'react'
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function ContextMenu({menuList, children}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
    <div className='h-fit flex'>
      <Menu.Button className="inline-flex justify-center w-full ">

{children}
      </Menu.Button>
    </div>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="py-1">
            {menuList.map((listItem, index)=>{
                return  <Menu.Item key={index}>
                {({ active }) => (
                 <span
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700",
                        listItem.redZone ? "text-red-400 border-t-[1px]" :"",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={listItem.function}
                  >
                    {listItem.title}
                  </span> 
                )}
              </Menu.Item>
            })}
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}