import { Button } from '@/components/ui';
import { Menu, MessageSquareDot } from 'lucide-react';
import { NavLink } from 'react-router';
import { useState } from 'react';
import { useHeaderHeightVar } from '@/hooks/useHeaderHeightVar';

export function HeaderLandig() {
  const [open, setOpen] = useState(false);
  const ref = useHeaderHeightVar();
  const toggleMenu = () => {
    console.log('toggleMenu');
    setOpen(!open);
  };
  return (
    <header className="relative w-full border-b border-gray-200 py-4" ref={ref}>
      <div className="container mx-auto flex items-center justify-between px-5">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <MessageSquareDot className="text-primary h-10 w-10" />
          <h1 className="text-2xl font-extrabold md:text-4xl">
            Box<span className="text-primary">CRM</span>
          </h1>
        </div>

        {/* BOTONES */}
        <div className="hidden space-x-4 md:flex">
          <Button variant="outline" asChild>
            <NavLink to="/login">Inicia Sesión</NavLink>
          </Button>
          <Button asChild>
            <NavLink to="/register">Crear Cuenta</NavLink>
          </Button>
        </div>

        {/* TOGGLE MÓVIL */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="text-primary size-6" />
        </Button>
      </div>

      {/* MENU MÓVIL */}
      <div
        className={`absolute top-full left-0 z-50 w-full bg-white shadow-lg transition-all md:hidden ${
          open ? 'flex flex-col space-y-3 px-4 py-4' : 'hidden'
        }`}
      >
        <Button variant="outline" asChild>
          <NavLink to="/login">Inicia Sesión</NavLink>
        </Button>
        <Button asChild>
          <NavLink to="/register">Crear Cuenta</NavLink>
        </Button>
      </div>
    </header>
  );
}
