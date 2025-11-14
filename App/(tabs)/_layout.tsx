import { Tabs } from 'expo-router';

import { TabBarIcon } from '../../components/icon/TabBarIcon';

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarStyle: {
          backgroundColor: '#2D2D32',
        },
      }}>
      <Tabs.Screen
        name="coupons"
        options={{
          title: 'Coupons',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="ticket-confirmation" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <TabBarIcon name="bolt" color={color} />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color }) => <Entypo name="text-document" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <AntDesign name="wallet" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}