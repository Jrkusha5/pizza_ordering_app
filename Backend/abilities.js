import { AbilityBuilder, Ability } from '@casl/ability';

export const defineAbilitiesFor = (user) => {
  const { can, cannot, build } = new AbilityBuilder(Ability);

  if (user.role === 'customer') {
    can('read', 'Order', { userId: user.id }); // Customers can read only their own orders
    can('create', 'Order'); // Customers can create orders
    cannot('manage', 'Order').because('Customers cannot manage orders');
  }

  if (user.role === 'restaurantManager') {
    can('manage', 'Order', { restaurantId: user.restaurantId }); // Managers can manage orders in their restaurant
    can('read', 'Order', { restaurantId: user.restaurantId });
    can('manage', 'Pizza', { restaurantId: user.restaurantId });
    cannot('read', 'User').because('Managers cannot access user data');
  }

  if (user.role === 'superAdmin') {
    can('manage', 'all'); // Super Admins can do everything
  }

  return build();
};
