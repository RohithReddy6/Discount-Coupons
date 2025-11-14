import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface TimeFilterProps {
  onFilterChange?: (days: number | null) => void;
}

const TimeFilter: React.FC<TimeFilterProps> = ({ onFilterChange }) => {
  const [selectedChip, setSelectedChip] = useState<number | null>(null);

  const chips = [
    { label: '07 days', value: 7 },
    { label: '15 days', value: 15 },
    { label: '30 days', value: 30 },
    { label: '90 days', value: 90 },
  ];

  const handleChipPress = (days: number) => {
    setSelectedChip(days);
    onFilterChange?.(days);
  };

  const handleDeselect = () => {
    setSelectedChip(null);
    onFilterChange?.(null);
  };

  return (
    <View className="items-center rounded-lg bg-[#141414] p-4">
      <View className="flex-row flex-wrap gap-2">
        {chips.map(({ label, value }) => (
          <TouchableOpacity
            key={value}
            onPress={() => handleChipPress(value)}
            className={`flex-row items-center justify-between rounded-full px-3 py-1 ${
              selectedChip === value ? 'bg-[#CDDC01]' : 'bg-[#4B4B50]'
            }`}>
            <Text
              className={`text-sm font-semibold ${
                selectedChip === value ? 'text-black' : 'text-white'
              }`}>
              {label}
            </Text>
            {selectedChip === value && (
              <TouchableOpacity
                onPress={(e) => {
                  e.stopPropagation();
                  handleDeselect();
                }}
                className="ml-1">
                <MaterialIcons name="close" size={12} color="black" />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default TimeFilter;