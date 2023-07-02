const mapping: Record<string, string> = {
  invoices: 'invoice',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
