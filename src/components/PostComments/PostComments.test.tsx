import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Teste para adicionar 2 comentários', () => {
        render(<PostComment/>); 

        const input = screen.getByTestId('textarea');
        fireEvent.change(input, { target: { value: 'Comentário 1' } });
        fireEvent.submit(screen.getByTestId('button'));

        fireEvent.change(input, { target: { value: 'Comentário 2' } });
        fireEvent.submit(screen.getByTestId('button'));


        expect(screen.getAllByTestId('comment')).toHaveLength(2)
    })
});
    
