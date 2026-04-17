import { ColorPicker } from './ColorPicker';
import { ColorCircle } from './ColorCircle';
import type { FCC } from '../../utils/types';
import { DEFAULT_COLORS } from '../../constants/default-colors';
import { useEffect, useRef, useState } from 'react';
import { CheckIcon, PlusIcon } from 'lucide-react';

interface Props {
  color: string;
  onChange: (color: string) => void;
}

type ColorId = keyof typeof DEFAULT_COLORS | 'CUSTOM' | '';

const PRESET_OPTIONS = Object.entries(DEFAULT_COLORS) as Array<[ColorId, string]>;

function getPresetColorIdByColor(color: string): ColorId | null {
  return PRESET_OPTIONS.find(([, value]) => value === color)?.[0] ?? null;
}

export const Colors: FCC<Props> = ({ color, onChange }) => {
  const [selectedColorId, setSelectedColorId] = useState<ColorId>(() => {
    const presetColorId = getPresetColorIdByColor(color);
    return presetColorId ?? (color ? 'CUSTOM' : '');
  });

  const [customColor, setCustomColor] = useState(() => {
    return getPresetColorIdByColor(color) ? '' : color;
  });

  const pendingSelectionRef = useRef<{ id: ColorId; color: string } | null>(null);

  useEffect(() => {
    const pedingSelection = pendingSelectionRef.current;

    if (pedingSelection && pedingSelection.color === color) {
      setSelectedColorId(pedingSelection.id);

      if (pedingSelection.id === 'CUSTOM') {
        setCustomColor(color);
      }

      pendingSelectionRef.current = null;
      return;
    }

    if (!color) {
      setSelectedColorId('');
      setCustomColor('');
      return;
    }

    const presetColorId = getPresetColorIdByColor(color);

    if (presetColorId) {
      setSelectedColorId(presetColorId);
      return;
    }

    setSelectedColorId('CUSTOM');
    setCustomColor(color);
  }, [color]);

  function handlePresetColorSelect(id: ColorId, value: string) {
    setSelectedColorId(id);

    if (color === value) {
      pendingSelectionRef.current = null;
      return;
    }

    pendingSelectionRef.current = { id, color: value };
    onChange(value);
  }

  function handleCustomColorSelect(newColor: string) {
    setCustomColor(newColor);
    setSelectedColorId('CUSTOM');

    if (color === newColor) {
      pendingSelectionRef.current = null;
      return;
    }

    pendingSelectionRef.current = { id: 'CUSTOM', color: newColor };
    onChange(newColor);
  }

  function handleCustomColorCircleClick() {
    setSelectedColorId('CUSTOM');

    if (!customColor || color === customColor) {
      pendingSelectionRef.current = null;
      return;
    }

    pendingSelectionRef.current = { id: 'CUSTOM', color: customColor };
    onChange(customColor);
  }

  function handleOpenChange(open: boolean) {
    if (open || selectedColorId !== 'CUSTOM' || customColor) return;

    setSelectedColorId(getPresetColorIdByColor(color) ?? (color ? 'CUSTOM' : ''));
  }

  return (
    <div className="mt-2 flex items-center gap-1">
      {PRESET_OPTIONS.map(([id, value]) => (
        <ColorCircle key={id} color={value} onClick={() => handlePresetColorSelect(id, value)}>
          {selectedColorId === id && <CheckIcon className="size-4 text-white" />}
        </ColorCircle>
      ))}

      <ColorPicker
        color={customColor}
        onColorChange={handleCustomColorSelect}
        onOpenChange={handleOpenChange}
      >
        <ColorCircle color={customColor} onClick={handleCustomColorCircleClick}>
          {selectedColorId === 'CUSTOM' ? (
            customColor ? (
              <CheckIcon className="size-4 text-white" />
            ) : (
              <CheckIcon className="text-muted-foreground size-3" />
            )
          ) : (
            <PlusIcon className="text-muted-foreground size-3" />
          )}
        </ColorCircle>
      </ColorPicker>
    </div>
  );
};
