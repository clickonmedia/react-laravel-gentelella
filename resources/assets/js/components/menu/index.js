import React from 'react';

import SideBar from '../SideBar';
import { HomeMenu } from '../home';
import { FormsMenu } from '../forms';
import { ExtrasMenu } from '../extras';

export const Menu = (
  <SideBar>
    <SideBar.MenuSection title="General">
      { HomeMenu }
      { FormsMenu }
      { ExtrasMenu }
    </SideBar.MenuSection>
  </SideBar>
);
