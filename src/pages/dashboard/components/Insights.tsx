import { type FC } from 'react';
import { CategoryPerPeriod } from './CategoryPerPeriodChart';
import { Card } from '../../../components/commons/Card';
import { CategoryBalancePerPeriodList } from './CategoryBalancePerPeriodList';
import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { usePeriod } from '../../../hooks/usePeriod';

import { useAPI } from '../../../hooks/useAPI';
import { SpentPerMonth } from './SpentPerMonth';
import { IncomePerMonth } from './IncomePerMonth';
import { BalancePerMonth } from './BalancePerMonth';

export const Insights: FC = () => {
  const api = useAPI();
  const { period } = usePeriod();
  const periodFormatted = dayjs().year(period.year).month(period.month).format('YYYYMM');

  useSuspenseQuery({
    queryKey: ['recurrences', 'prepare', periodFormatted],
    queryFn: async () => {
      await api.recurrences.v1PrepareRecurrence(periodFormatted);
      return true;
    },
  });

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
      <Card header={<h2>Income this month</h2>} wrapperClassName="lg:col-span-4">
        <IncomePerMonth />
      </Card>
      <Card header={<h2>Expenses this month</h2>} wrapperClassName="lg:col-span-4">
        <SpentPerMonth />
      </Card>
      <Card header={<h2>Balance this month</h2>} wrapperClassName="lg:col-span-4">
        <BalancePerMonth />
      </Card>
      <Card header={<h2>Spending by category</h2>} wrapperClassName="lg:col-span-9">
        <CategoryPerPeriod />
      </Card>
      <Card header={<h2>Balance by category</h2>} wrapperClassName="lg:col-span-3">
        <CategoryBalancePerPeriodList />
      </Card>
    </div>
  );
};
