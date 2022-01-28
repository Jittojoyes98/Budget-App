# A Budgetory App to keep track of your finances

This project helps you in handling your budgets and their expenses.User can add and remove budgets and expenses.

# About

The project help you in keeping track of your finances.It make use of React CRUD operations to add,delete
and view your expenses and budgets.React's state management and re-renderimg makes it easy to create the project.Some of the challenging part of the project was to implement the total and Uncategorized part.




# Build with Create React App

This project was made with [Create React App](https://github.com/facebook/create-react-app).


# How to install locally

First clone this repo and run `npm install`

# Run the project 

To run the project use `npm start`

## Available Scripts

In the project directory, you can enter the following to start running the project locally:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

# How to use

## You can start the project by adding a budget or an expense.If no budget was created before the new expense will be added to the uncategorized budget,and this is the default budget.Similarly we can add expenses for each budget in their own fields.We can remove a budget or an expense just by viewing the expense and and thus removing them.If a budget is removed its expense is kept track in Uncategorized budget field.Total is used to keep track of all the expenses.Also note that if the expense exceed some value we change the color of the progress bar accordingly.If it exceeds the maximum value the budget field become red in background.

# License

## There are no licenses

