import { useContext } from 'react';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/expenses-context';
import { getDateMinusDays } from '../util/date';

function RecentExpense() {
  const expensesCts = useContext(ExpensesContext);

  const recentExpenses = expensesCts.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      exponsesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 Days"
    />
  );
}

export default RecentExpense;
