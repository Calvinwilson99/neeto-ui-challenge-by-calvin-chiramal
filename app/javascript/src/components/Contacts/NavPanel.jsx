import React, { useState } from "react";

import { Search, Plus, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar } from "neetoui/layouts";

const NavPanel = () => {
  const [isSegmentsSearchCollapsed, setIsSegmentsSearchCollapsed] =
    useState(true);
  const [isTagsSearchCollapsed, setIsTagsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <MenuBar showMenu title="Contacts">
        <MenuBar.Block active count={0} label="All" />
        <MenuBar.Block count={0} label="Archived" />
        <MenuBar.Block count={0} label="Completed" />
        <MenuBar.Block count={0} label="Phase 2" />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSegmentsSearchCollapsed(
                  isSegmentsSearchCollapsed => !isSegmentsSearchCollapsed
                ),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isSegmentsSearchCollapsed}
          onCollapse={() => setIsSegmentsSearchCollapsed(true)}
        />
        <MenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsTagsSearchCollapsed(
                  isTagsSearchCollapsed => !isTagsSearchCollapsed
                ),
            },
            {
              icon: Plus,
            },
            {
              icon: Settings,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </MenuBar.SubTitle>
        <MenuBar.Search
          collapse={isTagsSearchCollapsed}
          onCollapse={() => setIsTagsSearchCollapsed(true)}
        />
      </MenuBar>
    </div>
  );
};

export default NavPanel;
