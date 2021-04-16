import { darkTheme, lightTheme } from "../assets/data/Theme";
import { createContext, useMemo, useCallback } from "react";
import useDarkMode from "use-dark-mode";

export const DarkModeContext = createContext({ value: false });

export default function Provider(props) {
  const dark = useDarkMode(false);
  const isDark = useMemo(() => dark.value, [dark]);
  const theme = useMemo(() => (isDark ? darkTheme : lightTheme), [isDark]);

  const themeToggler = useCallback(() => void dark.toggle(), [dark]);

  const providerValue = useMemo(
    () => ({
      dark,
      theme,
      isDark,
      themeToggler
    }),
    [dark, theme, isDark, themeToggler]
  );

  return <DarkModeContext.Provider value={providerValue} {...props} />;
}