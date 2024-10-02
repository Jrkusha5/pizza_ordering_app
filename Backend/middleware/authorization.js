import { defineAbility } from '@casl/ability';

export const authorize = (action, subject) => {
    return (req, res, next) => {
        const ability = defineAbility(req.user.role); // Based on user role, define abilities
        if (ability.can(action, subject)) {
            return next();
        }
        return res.status(403).json({ error: 'Access Denied' });
    };
};

export const defineAbility = (role) => {
    return new Ability((can) => {
        if (role === 'manager') {
            can('read', 'Order');
            can('update', 'Order');
        } else if (role === 'super_admin') {
            can('manage', 'all');
        } else {
            can('read', 'OwnOrder');
        }
    });
};
