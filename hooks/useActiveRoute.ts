import { usePathname } from 'next/navigation';

/**
 * Хук для определения активного маршрута и стилизации навигации
 * Возвращает функцию для проверки активности маршрута
 */
export function useActiveRoute() {
  const pathname = usePathname();

  const isActive = (route: string) => {
    return pathname === route;
  };

  const getActiveStyles = (route: string, activeStyles: string, inactiveStyles: string) => {
    return isActive(route) ? activeStyles : inactiveStyles;
  };

  return {
    pathname,
    isActive,
    getActiveStyles
  };
}
