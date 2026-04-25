/* eslint-disable @typescript-eslint/no-explicit-any */
type Condition = {
  field: string;
  operator: Operator;
  value: string;
};

type Operator = 'eq' | 'ne' | 'lt' | 'gt' | 'lte' | 'gte';

function getValue(value: any) {
  if (typeof value === 'string') {
    return `'${value}'`;
  } else if (typeof value === 'number') {
    return value.toString();
  }

  return value;
}

/** @deprecated use string manipulation instead */
export function createFilter() {
  const and: Condition[] = [];
  const orGroups: Condition[][] = [];

  const filterApi = {
    and(field: string, operator: Operator, value?: string | number | null) {
      and.push({ field, operator, value: getValue(value) });
      return filterApi;
    },

    initOr() {
      const orGroup: Condition[] = [];

      return {
        or(field: string, operator: Operator, value: string | number) {
          orGroup.push({ field, operator, value: getValue(value) });
          return this;
        },

        endOr() {
          orGroups.push(orGroup);
          return filterApi;
        },
      };
    },

    toURL() {
      let filter = '';

      if (and.length) {
        filter += and.map((c) => `${c.field} ${c.operator} ${c.value}`).join(' and ');
      }

      if (orGroups.length) {
        if (filter) filter += ' and ';

        filter += orGroups
          .map(
            (group) => `(${group.map((c) => `${c.field} ${c.operator} ${c.value}`).join(' or ')})`,
          )
          .join(' and ');
      }

      return filter;
    },
  };

  return filterApi;
}
