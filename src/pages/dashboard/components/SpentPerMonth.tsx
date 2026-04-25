import { useAPI } from '../../../hooks/useAPI';
import { usePeriod } from '../../../hooks/usePeriod';
import { getSummaryQueryOpts } from '../../../queries/transactions-queries';
import { useSuspenseQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';

export const SpentPerMonth = () => {
  const api = useAPI();

  const { period } = usePeriod();
  const formattedPeriod = dayjs().year(period.year).month(period.month).format('YYYYMM');
  const filter = [`period gte '${formattedPeriod}'`, `period lte '${formattedPeriod}'`].join(
    ' and ',
  );

  const { data } = useSuspenseQuery(getSummaryQueryOpts(api, filter));
  const expense = data.data.summary?.[0]?.expense * -1 + 0 || 0;

  return (
    <div>
      <span className="text-3xl font-medium text-red-400">
        {expense.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
      </span>
    </div>
  );
};
