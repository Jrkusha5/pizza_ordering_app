// abilityMiddleware.js
import { defineAbilitiesFor } from './abilities.js';

export const setUserAbilities = (req, res, next) => {
  const user = req.user;
  req.ability = defineAbilitiesFor(user);
  next();
};
