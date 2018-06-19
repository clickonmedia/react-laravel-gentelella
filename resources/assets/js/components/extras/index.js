import React from 'react';
import { GroupMenuItem, MenuItem } from '../SideBar';
import ExtrasMenuFactory from './ExtrasMenu';

const ExtrasMenu = ExtrasMenuFactory(React, GroupMenuItem, MenuItem);

export { ExtrasMenu }