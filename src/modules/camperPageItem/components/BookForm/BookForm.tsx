import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { InputDatePicker } from './components';
import { SubmitButton } from 'shared/components';
import s from './bookForm.module.scss';

type BookFormProps = {
  closeModal?: () => void;
  isOpen?: boolean;
};

export type Inputs = {
  name: string;
  email: string;
  dates?: [Date, Date];
  comment: string;
};

const initialValues: Inputs = {
  name: '',
  email: '',
  dates: undefined,
  comment: '',
};

const BookForm = ({ closeModal, isOpen }: BookFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const formattedDate =
      data.dates?.map((date) =>
        date instanceof Date ? date.toLocaleDateString('en-GB') : null
      ) || [];
    alert(
      `Congratulations, your booking request will be processed shortly. Our manager will get in touch with you for further details. Thank you for choosing our service.
      Dates: ${formattedDate[0]} - ${formattedDate[1]}`
    );
    reset();
    if (isOpen && closeModal) closeModal();
  };

  return (
    <section className={s.bookformSection}>
      <h3 className={s.formTitle}>Book your campervan now</h3>
      <p className={s.suportingText}>
        Stay connected! We are always ready to help you.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className={s.bookForm}
      >
        <input
          type="text"
          {...register('name', { required: 'Name is required' })}
          className={s.textInput}
          placeholder="Name*"
        />
        {errors.name && <span>{errors.name.message}</span>}
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          className={s.textInput}
          placeholder="Email*"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <Controller
          name="dates"
          control={control}
          rules={{
            validate: (value) =>
              value && value[0] && value[1]
                ? true
                : 'Booking dates are required',
          }}
          render={({ field }) => (
            <InputDatePicker field={field} className={s.inputDatePicker} />
          )}
        />
        {errors.dates && <span>{errors.dates.message}</span>}
        <textarea
          {...register('comment')}
          className={s.commentTextarea}
          placeholder="Comment"
        ></textarea>
        <SubmitButton text={'Send'} className={s.formSubBtn} />
      </form>
    </section>
  );
};

export default BookForm;
