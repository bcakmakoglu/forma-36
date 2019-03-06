import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dropdown from './Dropdown';
import DropdownListItem from '../DropdownListItem';
import Button from '../../Button';
import TextLink from '../../TextLink';
import DropdownList from '../DropdownList';

function DefaultStory() {
  const [isOpen, setOpen] = useState(false);

  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      key={Date.now()} // Force Reinit
      position={select(
        'Menu Position',
        {
          'bottom-left': 'bottom-left',
          'bottom-right': 'bottom-right',
          'top-left': 'top-left',
          'top-right': 'top-right',
        },
        'bottom-left',
      )}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          toggle
        </Button>
      }
      extraClassNames={text('Extra Class Names', '')}
    >
      <DropdownList>
        <DropdownListItem isTitle>Entry Title</DropdownListItem>
        <DropdownListItem onClick={action('onClick Element')}>
          Embed existing entry
        </DropdownListItem>
        <Dropdown
          position={select(
            'Submenu Position',
            {
              left: 'left',
              right: 'right',
            },
            'right',
          )}
          submenuToggleLabel="Create and embed existing entry"
          extraClassNames={text('Extra Class Names', '')}
        >
          <DropdownList>
            <DropdownListItem onClick={action('submenu click')}>
              Embed as inline element
            </DropdownListItem>
            <DropdownListItem isDisabled>
              Embed as block element
            </DropdownListItem>
          </DropdownList>
        </Dropdown>
      </DropdownList>
      <DropdownList border="top">
        <DropdownListItem>
          <TextLink href="http://google.com">This is a Link</TextLink>
        </DropdownListItem>
      </DropdownList>
    </Dropdown>
  );
}

function ScrollableStory() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Dropdown
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      position={select(
        'Menu Position',
        {
          'bottom-left': 'bottom-left',
          'bottom-right': 'bottom-right',
          'top-left': 'top-left',
          'top-right': 'top-right',
        },
        'bottom-left',
      )}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}
        >
          toggle
        </Button>
      }
      extraClassNames={text('Extra Class Names', '')}
    >
      <DropdownList maxHeight={200}>
        {[...new Array(25)].map((entry, index) => (
          // eslint-disable-next-line
          <DropdownListItem key={`key-${index}`} onClick={action('click')}>
            Entry Item {index}
          </DropdownListItem>
        ))}
      </DropdownList>
    </Dropdown>
  );
}

storiesOf('Components|Dropdown', module)
  .add('default', () => <DefaultStory />)
  .add('scrollable', () => <ScrollableStory />);