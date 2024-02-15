import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { Input } from "@/components/ui/input"

export default function Navbar(){
  return(
    <Menubar className="flex items-center justify-between w-full h-20 gap-10 p-6">
    <MenubarMenu>
      <MenubarTrigger className="text-xl">Filmes</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          New Window <MenubarShortcut>⌘N</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>

    <Input className="w-auto text-sm px-5 h-auto" type="text" placeholder="Digite o filme"/>

    </Menubar>
  )
}