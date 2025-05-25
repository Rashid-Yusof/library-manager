export interface Loan {
    id: string;
    bookId: string;
    memberId: string;
    loanDate: string;
    dueDate: string;
    status: 'Active' | 'Returned' | 'Overdue';
}