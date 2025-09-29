export default function ThemeChanger() {
  return (
    <label className="swap swap-rotate">
      <input type="checkbox" value="dark" className="theme-controller" />
      <span className="swap-off icon-[tabler--sun] size-7"></span>
      <span className="swap-on icon-[tabler--moon] size-7"></span>
    </label>
  );
}
