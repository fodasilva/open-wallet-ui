import { ColorPicker } from './ColorPicker';
import { ColorCircle } from './ColorCircle';
import type { FCC } from '../../utils/types';
import { DEFAULT_COLORS } from '../../constants/default-colors';
import { useState } from 'react';
import { CheckIcon, PlusIcon } from 'lucide-react';

interface Props {
  color: string;
  onChange: (color: string) => void;
  defaultColors?: string[];
}

export const Colors: FCC<Props> = ({ color, onChange, defaultColors = DEFAULT_COLORS }) => {
  // activeIndex finds if the current color is one of the presets. Returns -1 if it's a custom color.
  const activeIndex = defaultColors.indexOf(color);

  // Single state to track the value in the color picker
  const [customColor, setCustomColor] = useState(activeIndex === -1 ? color : '');

  // A color is considered "Custom active" if it's not a preset OR if it matches the current customColor state.
  // This ensures that picking a preset color via the eyedropper/picker highlights the custom circle.
  const isCustomActive = activeIndex === -1 || (!!color && color === customColor);

  // activeId is a unified identifier: the hex value (string) for custom colors, or the index (number) for presets.
  const activeId = isCustomActive ? color : activeIndex;

  return (
    <div className="mt-2 flex items-center gap-1">
      {defaultColors.map((hex, index) => (
        <ColorCircle
          key={`preset-${index}`}
          color={hex}
          onClick={() => {
            setCustomColor(''); // Reset custom selection when a preset is explicitly clicked
            onChange(hex);
          }}
        >
          {activeId === index && <CheckIcon className="size-4 text-white" />}
        </ColorCircle>
      ))}

      <ColorPicker
        color={customColor}
        onColorChange={(newColor) => {
          setCustomColor(newColor);
          onChange(newColor);
        }}
      >
        <ColorCircle color={customColor} onClick={() => customColor && onChange(customColor)}>
          {activeId === color && !!color ? (
            <CheckIcon className="size-4 text-white" />
          ) : (
            <PlusIcon className="text-muted-foreground size-3" />
          )}
        </ColorCircle>
      </ColorPicker>
    </div>
  );
};
