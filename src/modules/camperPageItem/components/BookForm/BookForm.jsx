import { useForm, Controller } from 'react-hook-form';
import { InputDatePicker } from './components';
import { SubmitButton } from 'shared/components';
import s from './bookForm.module.scss';

const BookForm = () => {
  const initialValues = {
    name: '',
    email: '',
    dates: [null, null],
    comment: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  const onSubmit = (data) => {
    const formattedDate = data.dates.map((date) =>
      date?.toLocaleDateString('en-GB')
    );
    alert(
      `Congratulations, your booking request will be processed shortly. Our manager will get in touch with you for further details. Thank you for choosing our service.
      Dates: ${formattedDate[0]} - ${formattedDate[1]}`
    );
    reset();
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
              value[0] && value[1] ? true : 'Booking dates are required',
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
        <SubmitButton text={'Send'} />
      </form>
    </section>
  );
};

export default BookForm;
