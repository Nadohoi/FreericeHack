# Clear the terminal
clear

# Define the counter
# of trapped exits
TRAPPED=0

# When the Freerice
# hack exits...
catch () {
  # If no other exits have
  # been counter before
  if [ $TRAPPED -eq 0 ]
  then
    # Change to another
    # Replit server to
    # get unblocked
    kill 1

    exit

    # After this, the program exits,
    # but if the Repl is Always On,
    # Replit will automatically run
    # this program again, as stated
    # in the .replit file
  fi

  # Increment the counter
  # of trapped exits
  TRAPPED=`expr $TRAPPED + 1`
}

# Trap the exits
trap catch INT TERM EXIT

main () {
  if [ -n "$FREERICE_INTERVAL" ]
  then
    python3 Requester.py -t "$FREERICE_THREADS" -i "$FREERICE_INTERVAL"
  else
    python3 Requester.py -t "$FREERICE_THREADS"
  fi
}

# Run the Freerice hack
export FREERICE_THREADS=min
export FREERICE_INTERVAL=
main