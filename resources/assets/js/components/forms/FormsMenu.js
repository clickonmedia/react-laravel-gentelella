export default function (React, GroupMenuItem, MenuItem) {
  return (
    <GroupMenuItem title="Forms" icon="edit" to="/forms">
      <MenuItem title="General Form" to="/dashboard/forms/general-form"/>
      <MenuItem title="Form Buttons" to="/dashboard/forms/form-buttons"/>
    </GroupMenuItem>
  );
};
