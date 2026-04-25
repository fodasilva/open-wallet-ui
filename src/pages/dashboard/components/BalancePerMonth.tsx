import { useAPI } from '../../../hooks/useAPI';
import { usePeriod } from '../../../hooks/usePeriod';
import { getSummaryQueryOpts } from '../../../queries/transactions-queries';
import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { cn } from '../../../utils/functions';

export const BalancePerMonth = () => {
  const api = useAPI();

  const { period } = usePeriod();
  const formattedPeriod = dayjs().year(period.year).month(period.month).format('YYYYMM');
  const filter = [`period gte '${formattedPeriod}'`, `period lte '${formattedPeriod}'`].join(
    ' and ',
  );

  const { data } = useSuspenseQuery(getSummaryQueryOpts(api, filter));
  const balance = data.data.summary?.[0]?.balance || 0;

  return (
    <div>
      <span
        className={cn('text-3xl font-medium', balance >= 0 ? 'text-green-500' : 'text-red-400')}
      >
        {balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </span>
    </div>
  );
};
