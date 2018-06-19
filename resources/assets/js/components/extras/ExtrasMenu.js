export default function (React, GroupMenuItem, MenuItem) {
  return (
  <GroupMenuItem title="Extras" icon="windows" to="/dashboard/extras">
    <MenuItem title="Pricing Tables" to="/dashboard/extras/pricing-tables" />
    <MenuItem title="Typography" to="/dashboard/extras/typograpy" />
    <MenuItem title="Glyphicons" to="/dashboard/extras/glyphicons" />
    <MenuItem title="Icons" to="/dashboard/extras/icons" />
    <MenuItem title="Media Gallery" to="/dashboard/extras/media-gallery" />
  </GroupMenuItem>
  );
};
